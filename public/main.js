const socket = io();

// Elements
const chatBox = document.getElementById('chat-box');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Display messages
const displayMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<strong>${message.username}:</strong> ${message.text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
};

// Load chat history
socket.on('chatHistory', (messages) => {
  messages.forEach(displayMessage);
});

// Receive new message
socket.on('message', (message) => {
  displayMessage(message);
});

// Send message
sendButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const text = messageInput.value;

  if (username && text) {
    socket.emit('message', { username, text });
    messageInput.value = '';
  }
});
