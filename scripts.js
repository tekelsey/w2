function checkGuess() {
    const userInput = document.getElementById('user-input').value;
    const feedback = document.getElementById('feedback');
    if (userInput.toLowerCase() === currentWord) {
        feedback.textContent = 'Congratulations! You guessed the word!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Sorry, that is incorrect. Try again!';
        feedback.style.color = 'red';
    }
} // This closing brace and parenthesis were missing
