# Dumb text labeller
Using, Deta, FastAPI, spaCy ([API and Backend](https://2nugwu.deta.dev/docs)) and GitHub pages ([Frontend](https://jameshtwose.github.io/dumb_news/)) to create a simple NLP based text labeller with simple static interface. 

To serve the front end locally use the ([angular-CLI](https://angular.io/guide/setup-local)):

- `ng serve`

To deploy the app (add the angular gh-pages if necessary: `ng add angular-cli-ghpages`):

- `ng deploy --base-href=/angular-app/`

To run the backend locally use
- `uvicorn main:app --reload` (install requirements if necessary `pip install -r requirements.txt`)

To deploy the backend using the [deta-cli](https://docs.deta.sh/docs/cli/install)

- `deta login`
- `deta deploy` (install requirements if necessary `pip install -r requirements.txt`)