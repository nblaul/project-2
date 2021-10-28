from flask import Flask, render_template, redirect, request, jsonify, Markup
from flask_pymongo import PyMongo
import json
import pandas as pd


app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/stack")


@app.route("/")
def index():

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True) 



