// Function to handle sending a message
function sendMessage() {
  // Get the user's input from the input field
  var userInput = document.getElementById('user-input').value;
  // Get the chatbox element where messages are displayed
  var chatbox = document.getElementById('chatbox');
  // Get the typing indicator element
  var typingIndicator = document.getElementById('typing-indicator');

  // Check if the input field is empty
  if (userInput.trim() === '') {
      return; // Do nothing if input is empty
  }

  // Create a new div element to display the user's message
  var userMessage = document.createElement('div');
  userMessage.className = 'user-message'; // Apply user message styling
  userMessage.textContent = 'You: ' + userInput; // Set the text content to include the user input
  chatbox.appendChild(userMessage); // Add the user message to the chatbox

  // Show the typing indicator to simulate the bot typing
  typingIndicator.textContent = 'Bot is typing...';

  // Simulate a delay before showing the bot's response
  setTimeout(function() {
      // Hide the typing indicator after the delay
      typingIndicator.textContent = '';

      // Create a new div element to display the bot's response
      var botMessage = document.createElement('div');
      botMessage.className = 'bot-message'; // Apply bot message styling

      // Get the bot's response based on the user's input
      var response = getBotResponse(userInput);
      botMessage.textContent = 'Bot: ' + response; // Set the text content to include the bot's response
      chatbox.appendChild(botMessage); // Add the bot message to the chatbox

      // Clear the input field for the next message
      document.getElementById('user-input').value = '';

      // Scroll to the bottom of the chatbox to show the latest message
      chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000); // 1 second delay for typing effect
}

// Function to determine the bot's response based on user input
function getBotResponse(input) {
  var response;

  // Check the user's input and provide an appropriate response
  if (input.toLowerCase().includes('hello')) {
      response = 'Hi there! How can I help you today?'; // Greeting response
  } else if (input.toLowerCase().includes('how are you')) {
      response = 'I\'m doing great, thanks for asking! How about you?'; // Response for asking bot's well-being
  } else if (input.toLowerCase().includes('bye')) {
      response = 'Goodbye! Have a wonderful day!'; // Farewell response
  } else {
      response = 'I\'m not sure how to respond to that. Could you please rephrase?'; // Default response for unrecognized input
  }

  return response; // Return the determined response
}


