// alert("hi");

// api url
const article_api_url = "https://2nugwu.deta.dev/article/";
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

// const comments_list = ["waooo", "not bad"];
// fetch(article_api_url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({content: "The 1992 Cricket World Cup was won by Pakistan",
//                         comments: comments_list})
//     // body: `{"content": "The 1992 Cricket World Cup was won by Pakistan",
//     //         "comments": ["waooo", "not bad"]}`
//   }).then(res => res.json())
//     .then(res => console.log(res));

// let xhr = new XMLHttpRequest();
// xhr.open("POST", article_api_url);

// xhr.setRequestHeader("accept", "application/json");
// xhr.setRequestHeader("Content-Type", "application/json");
 
// xhr.onload = () => console.log(xhr.responseText);
 
// let data = JSON.stringify({
//     "content": "The 1992 Cricket World Cup was won by Pakistan",
//     "comments": ["waooo", "not bad"],
// });
  
// xhr.send(data);