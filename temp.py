import os
from flask import Flask, render_template, request, jsonify
from openai import OpenAI

app = Flask(__name__)

# Load API key from environment
api_key = os.environ.get("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")
if not api_key:
    raise RuntimeError("OPENAI_API_KEY not set in environment variables")

client = OpenAI(api_key=api_key)

@app.route('/')
def home():
    return render_template('temp.html')

@app.route('/submit', methods=['POST'])
def submit():
    user_input = request.form.get('user_input')
    response = client.responses.create(
        model="gpt-4o-mini",
        input=user_input,
        store=True,
    )
    return jsonify({'result': response.output_text})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
