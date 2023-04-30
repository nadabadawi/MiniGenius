import flask
from flask import request, jsonify
import json
import os
import sys
import openai

openai.api_key = "YOUR_API_KEY"

class GPTAPI:
    def generate_text(self, prompt):
        pass
class GPTv1:
    def generate_text_version1(self, prompt):
        
        response = openai.Completion.create(
            engine="davinci",
            prompt=prompt,
            max_tokens=5
            )
        return response
class GPTv2:
    def generate_text_version2(self, prompt):
        response = openai.Completion.create(
            engine="davinci-2",
            prompt=prompt,
            max_tokens=5)
        return response
class GPTAdapter(OpenAIAPI):
    def __init__(self, api_version):
        if api_version == 1:
            self.api = GPTv1()
        elif api_version == 2:
            self.api = GPTv2()
    def generate_text(self, prompt):
        if hasattr(self.api, 'generate_text_version1'):
            return self.api.generate_text_version1(prompt)
        elif hasattr(self.api, 'generate_text_version2'):
            return self.api.generate_text_version2(prompt)



app = flask.Flask(__name__)


@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        api_adapter = OpenAIAPIAdapter(api_version=2)
        data = request.get_json()
        prompt = data['prompt']
        prompt = 'I am a student and I\'m trying to study and I hope you can provide me with some explanation for' + str(prompt)
        response = api_adapter.generate_text(prompt)
        return jsonify(response)
    

if __name__ == "__main__":
    app.run()
    
