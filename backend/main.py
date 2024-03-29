from fastapi import FastAPI
from backend.ml import nlp
from pydantic import BaseModel
import starlette
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    # "http://127.0.0.1:5500/docs/index.html",
    # "http://127.0.0.1:5500/",
    # "https://jameshtwose.github.io/health_deta/",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_main():
    return {"message": "Welcome"}


class Article(BaseModel):
    content: str


@app.post("/article/")
def analyze_sentence(sentence: Article):
    ents = []
    doc = nlp(sentence.content)
    for ent in doc.ents:
        ents.append({"text": ent.text, "label": ent.label_})
    return {"ents": ents}
