from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
client = MongoClient(os.getenv("MONGO_URL"))
db = client["vignan"]
students_collection = db["student"]
staff_collection = db["staff"]
students_collection=db["student"]
staff_collection=db["staff"]
