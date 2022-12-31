# Dumb text labeller
Using, Deta, FastAPI, spaCy ([API and Backend](https://2nugwu.deta.dev/docs)) and React.js with GitHub pages ([Frontend](https://jameshtwose.github.io/dumb_news/)) to create a simple NLP based text labeller with simple static interface. 

To serve the front end locally:

- `npm run start`

To deploy the app (setup is based on: `https://github.com/gitname/react-gh-pages`):

- `npm run deploy`

To run the backend locally use
- `uvicorn main:app --reload` (install requirements if necessary `pip install -r requirements.txt`)

To deploy the backend using the [deta-cli](https://docs.deta.sh/docs/cli/install)

- `deta login`
- `deta deploy` (install requirements if necessary `pip install -r requirements.txt`)