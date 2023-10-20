from string import Template

import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

LLM_API_URL = "http://localhost:11434/api/generate"


def generate_response(question):
    instruction = """
    You are a Twitter customer support AI chatbot.
    Only answer questions related to Twitter customer support.
    If the question is not related to Twitter customer support, do not answer the question.

    Answer the following question if its related to twitter customer support otherwise say I know about twitter only:
    $question
    """
    
    template = Template(instruction)
    prompt = template.substitute(question=question)

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

    if user_message is None:
        return jsonify({'error': 'Missing user_message parameter'}), 400

    response = generate_response(user_message)
    response = response.strip()

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
