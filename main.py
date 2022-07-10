from fastapi import FastAPI
from ml import nlp
from pydantic import BaseModel
import starlette
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    # "http://127.0.0.1:5500/docs/index.html",
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
    comments: List[str] = []


@app.post("/article/")
def analyze_article(articles: List[Article]):
    ents = []
    comments = []
    for article in articles:
        for comment in article.comments:
            comments.append(comment.upper())
        doc = nlp(article.content)

        for ent in doc.ents:
            ents.append({"text": ent.text, "label": ent.label_})
    return {"ents": ents, "comments": comments}