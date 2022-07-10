// alert("hi");

// api url
const article_api_url = "https://2nugwu.deta.dev/article/";
// const article_api_url = "http://127.0.0.1:8000/article/";
const api_url = "https://2nugwu.deta.dev/";

const options = {
  method: 'GET',
  mode: "cors",
  // credentials: 'omit',
	headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
	}
};

// fetch(api_url, options)
//     .then(response => response.json())
//     .then(data => console.log(data));

fetch(api_url, options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayWelcome(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayWelcome(data) {

    const welcomeMessage = data;
    const welcomeDiv = document.getElementById("welcome");    
  
    // date name
    const welcomeMessageMessage = welcomeMessage.message;
    const heading = document.createElement("h2");
    heading.innerHTML = "Message: " + welcomeMessageMessage;
    welcomeDiv.appendChild(heading);
  
  }

  function displayInput() {

    const Input1 = document.getElementById('formGroupExampleInput').value;
    const Input1Div = document.getElementById("input1");    
  
    // date name
    // const welcomeMessageMessage = Input1;
    const heading = document.createElement("h4");
    heading.innerHTML = "Input: " + Input1;
    Input1Div.appendChild(heading);
  
  }

  displayInput();

fetch(article_api_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: "1908 is the best year according to James"})
  }).then(res => res.json())
    .then(res => console.log(res));