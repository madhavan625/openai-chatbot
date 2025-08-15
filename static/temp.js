// This file contains JavaScript code that may handle client-side interactions, such as form submissions or dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const chatDiv = document.getElementById('chat');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const userMsg = formData.get('user_input');

        // Show user message
        appendMessage('Mr.User', userMsg, 'user');

        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Show bot response
            appendMessage('saiteja Chatbot', data.result, 'bot');
            form.reset();
        })
        .catch((error) => {
            appendMessage('saiteja Chatbot', 'Error: ' + error, 'bot');
        });
    });

    function appendMessage(sender, text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${type}`;
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatDiv.appendChild(msgDiv);
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }
});