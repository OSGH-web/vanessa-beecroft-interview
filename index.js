import messageData from "./content/all_article_text.json";

let imessageContainer = document.getElementById("imessage-container");
function addMessageElement(message) {
  let messageElement = document.createElement("p");
  messageElement.textContent = message["content"];

  if (message["name"] === "Vanessa") {
    messageElement.className = "from-them";
  } else {
    messageElement.className = "from-me";
  }

  imessageContainer.appendChild(messageElement);
}

messageData.forEach((message) => addMessageElement(message));
