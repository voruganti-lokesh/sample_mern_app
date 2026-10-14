from fastapi import FastAPI
from models import Student, Staff
from database import students_collection, staff_collection

app = FastAPI()


def student_details(student):
    return {
        "name": student["name"],
        "email": student["email"],
        "age": student["age"],
        "mark": student["mark"],
        "id": str(student["_id"])
    }


@app.get("/getstudents")
def getstudents():
    students = students_collection.find()
    return [student_details(student) for student in students]

    



@app.post("/register")
def register(stu: Student):
    result = students_collection.insert_one(stu.model_dump())
    return {"message": "data inserted successfully"}


@app.put("/updateprofile")
def update_profile():
    return "update profile called"


@app.delete("/deleteprofile")
def delete_profile():
    return "delete profile called"


@app.get("/getstudentDet/{userid}")
def getstudentDet(userid: int):
    return {"userid": userid}


@app.get("/getstudentDetails")
def getstudentDetails(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}