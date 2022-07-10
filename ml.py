#%%
# Import the spacy module
import spacy

#%%
# read in the NLP model
nlp = spacy.load("en_core_web_sm")

#%%
# Inputting the sentence to label
doc = nlp("Harvard grad Gabby Thomas wins bronze in women's 200-meter final in Tokyo") 

# printing the identified words and their label (e.g. Harvard is an Organisation)
for ent in doc.ents:
    print(ent.text,ent.label_)
# %%
