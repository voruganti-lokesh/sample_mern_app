from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name: str
    email: str
    age: int
    marks: float

app = FastAPI()

@app.get("/getstudents")
def read_students():
    return "get students api called";
@app.post("/register")
def register(stu: Student):
    return stu;
@app.put("/updateprofile")
def update_profile():
    return "update profile called";
@app.delete("/deleteprofile")
def delete_profile():
    return "delete profile called";
@app.get("/getstudentDet/{userid}")
def getstudentDet(userid: int):
    return {"userid": userid,}
@app.get("/getstudentDetails")
def getstudentDetails(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}