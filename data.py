#dependencies
import pymongo
import pandas as pd
from bson.json_util import dumps
from pymongo import MongoClient
import json

def update_data():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)

    # db
    db = client.stack
    
    # Declare the collection
    data = db.data
    cursor = db.salary.find({})
    with open('static/data_salary.json', 'w') as file:
        json.dump(json.loads(dumps(cursor)), file)   


    # Declare the collection
    lang_pct = db.lang_pct
    cursor = db.percent.find({})
    with open('static/lang_pct.json', 'w') as file:
        json.dump(json.loads(dumps(cursor)), file)


    # results
    return