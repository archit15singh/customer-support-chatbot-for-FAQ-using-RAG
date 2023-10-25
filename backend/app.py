from utils import generate_rag_response, generate_response

from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


LLM_API_URL = "http://localhost:11434/api/generate"


@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('user_message')
    if user_message is None:
        return jsonify({'error': 'Missing parameter user_message'}), 400
    
    answer, related_questions = generate_rag_response(user_message)
    answer = answer.strip()
    related_questions = related_questions.strip()

    response = f"{answer}\n Related questions:\n{related_questions}"
    return jsonify({'response': response})


if __name__ == '__main__':
    app.run(debug=True)
