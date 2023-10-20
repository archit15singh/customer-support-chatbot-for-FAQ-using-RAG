from string import Template

import requests
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


LLM_API_URL = "http://localhost:11434/api/generate"


def format_conversation_history(conversation_history):
    processed_conversation_history = ""

    for message in conversation_history:
        processed_conversation_history += f"{message['sender']}: {message['message']}\n"
    return processed_conversation_history


def generate_response(question, conversation_history):
    instruction = """
    You are a Twitter customer support AI chatbot with memory of conversation history.
    Answer questions related to Twitter customer support.
    Answer questions based on the conversation history.
    If the question is not related to Twitter customer support or the conversation history, do not answer the question.

    Conversation History:
    $conversation_history

    Answer the following question if its related to twitter customer support otherwise say I know about twitter only:
    $question
    """
    
    template = Template(instruction)
    prompt = template.substitute(conversation_history=conversation_history, question=question)

    data = {
        "model": "mistral-openorca",
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(LLM_API_URL, json=data)
        response.raise_for_status()

        response_data = response.json()
        return response_data.get("response", "No response")
    except requests.RequestException as e:
        return f"Error calling external API: {str(e)}"


@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('user_message')
    conversation_history = request.json.get('conversation_history')

    if user_message is None or conversation_history is None:
        return jsonify({'error': 'Missing parameter conversation_history or user_message'}), 400
    
    conversation_history = format_conversation_history(conversation_history)
    response = generate_response(user_message, conversation_history)
    response = response.strip()

    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(debug=True)
