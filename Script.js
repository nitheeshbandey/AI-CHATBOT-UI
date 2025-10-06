const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // User message
  addMessage(text, 'user');

  // Fake bot response
  setTimeout(() => {
    addMessage("This is a simulated response.", 'bot');
  }, 600);

  userInput.value = "";
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
