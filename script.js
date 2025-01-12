function checkAnswer(questionNumber, correctAnswer) {
    // Get the user's answer
    var userAnswer = document.getElementById('question' + questionNumber).value.trim();

    // Get the feedback div
    var feedbackDiv = document.getElementById('feedback' + questionNumber);

    // Check if the user's answer is correct
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.style.color = "green";
        feedbackDiv.style.backgroundColor = "#d4edda";  // Light green background
    } else {
        feedbackDiv.textContent = "Incorrect. The correct answer is: " + correctAnswer;
        feedbackDiv.style.color = "red";
        feedbackDiv.style.backgroundColor = "#f8d7da";  // Light red background
    }
}

 function goBackToChapters() {
        // Hide the game section
        document.querySelector('.game-container').style.display = 'none';

        // Show the chapters section
        document.querySelector('.container').style.display = 'block';
        document.querySelector('nav').style.display = 'block';  // Ensure the navigation bar is visible

        // Ensure Chapter 1 is displayed
        showChapter(1);
    }