from flask import Flask, render_template, redirect, request, jsonify, Markup
from flask_pymongo import PyMongo
import json
import data
import pandas as pd


app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/stack")


@app.route("/")
def index():
    # add the code that creates the two json files
    return render_template("index.html")

@app.route("/data")
def update():
    # add the code that creates the two json files from MongoDB
    update_data = data.update_data()
    
    return redirect("/") 

if __name__ == "__main__":
    app.run(debug=True) 



