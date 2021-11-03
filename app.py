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
    # launch the start page
    return render_template("index.html")

@app.route("/home")
def home():
    # launch the home page
    return render_template("home.html")

@app.route("/chart1")
def chart1():
    # launch the home page
    return render_template("chart1.html")  


@app.route("/chart2")
def chart2():
    # launch the home page
    return render_template("chart2.html")   


@app.route("/chart3")
def chart3():
    # launch the home page
    return render_template("chart3.html")   


@app.route("/chart4")
def chart4():
    # launch the home page
    return render_template("chart4.html")                 

@app.route("/data")
def update():
    # add the code that creates the two json files from MongoDB
    update_data = data.update_data()
    
    return redirect("/") 

if __name__ == "__main__":
    app.run(debug=True) 



