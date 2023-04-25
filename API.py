import flask
from flask import request, jsonify
import json
import os
import sys
import openai

openai.api_key = "YOUR_API_KEY"

class OpenAIAPI:
    def generate_text(self, prompt):
        pass

class OpenAIAPIv1:
    def generate_text(self, prompt):
        
        response = openai.Completion.create(
            engine="davinci",
            prompt=prompt,
            max_tokens=5
            )
        return response

class OpenAIAPIv2:
    def generate_text_v2(self, prompt):
        response = openai.Completion.create(
            engine="davinci-2",
            prompt=prompt,
            max_tokens=5)
        return response

class OpenAIAPIAdapter(OpenAIAPI):
    def __init__(self, api_version):
        if api_version == 1:
            self.api = OpenAIAPIv1()
        elif api_version == 2:
            self.api = OpenAIAPIv2()
        else:
            raise ValueError("Invalid API version number")

    def generate_text(self, prompt):
        if hasattr(self.api, 'generate_text'):
            return self.api.generate_text(prompt)
        elif hasattr(self.api, 'generate_text_v2'):
            return self.api.generate_text_v2(prompt)
        else:
            raise NotImplementedError("API version does not support generate_text")

api_adapter = OpenAIAPIAdapter(api_version=2)
response = api_adapter.generate_text("Hello, World!")

app = flask.Flask(__name__)


@app.route('/', methods=['POST'])
def home():
    if request.method == 'POST':
        data = request.get_json()
        prompt = data['prompt']
        prompt = 'I am a student and I\'m trying to study and I hope you can provide me with some explanation for' + str(prompt)
        response = api_adapter.generate_text(prompt)
        return jsonify(response)
    