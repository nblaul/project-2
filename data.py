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
    cursor = db.data.find({})
    with open('data_salary.json', 'w') as file:
        json.dump(json.loads(dumps(cursor)), file)   


    # Declare the collection
    lang_pct = db.lang_pct
    cursor = db.lang_pct.find({})
    with open('lang_pct.json', 'w') as file:
        json.dump(json.loads(dumps(cursor)), file)


    # results
    return