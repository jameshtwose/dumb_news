# %%
import requests

# %%
# Testing locally
response = requests.get("http://127.0.0.1:8000")
print(response.text)
# %%
header = {"accept": "application/json",
          "Content-Type": "application/json",
          "access-control-allow-credentials": "true",
          "access-control-allow-origin": "*"
          }
params = [{"content": "James Twose likes November 2021"}]
article = requests.post(f"http://127.0.0.1:8000/article/",
                        json=params,
                        headers=header)

data_dict = article.json()
data_dict.keys()

print("Output: ", article.text)
# %%
print("Label: ", list(data_dict["ents"][1].values())[1])
print("Text: ", list(data_dict["ents"][1].values())[0])


# %%
# Testing deployed version
header = {"accept": "application/json",
          "Content-Type": "application/json"}

params = [
    {
        "content": "James Twose likes November 2021"
    }
]

api_url = "https://2nugwu.deta.dev/article/"

article = requests.post(api_url, headers=header, json=params)

data_dict = article.json()

print("Label: ", list(data_dict["ents"][1].values())[1])
print("Text: ", list(data_dict["ents"][1].values())[0])
# %%
data_dict
# %%
