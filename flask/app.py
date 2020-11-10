# flask/app.py
# Ian Kollipara
# 2020.11.10
# Flask App

# Imports
from flask import Flask, request, jsonify, session
from flask_cors import CORS

app = Flask(__name__)

app.config["SECRET_KEY"] = "USE SOMETHING REAL"

CORS(app)

User = {}


@app.route("/get_user")
def get_user():
    return User

@app.route("/new_user", methods=["POST"])
def new_user():
    if request.method == "POST":
        User.update(request.json)
    return jsonify("Sended")

if __name__ == "__main__":
    app.run(debug=True)