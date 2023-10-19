import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def generate_response(user_message):
    time.sleep(5)
    response = f"You said: {user_message}"
    return response

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('user_message')

    if user_message is None:
        return jsonify({'error': 'Missing user_message parameter'}), 400

    response = generate_response(user_message)

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
