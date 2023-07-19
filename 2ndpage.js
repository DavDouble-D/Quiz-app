
window.onload = function() {
  // Retrieve the username from the local storage
  var username = localStorage.getItem('username');

  // Display the username on the page
  var usernameElement = document.getElementById('username');
  usernameElement.textContent = username;
};

    function showImage(event) {
      var image = document.getElementById('mainImage');
      image.src = URL.createObjectURL(event.target.files[0]);
    }

    function myFunction(container) {
      x.classList.toggle("change");
    }
    
    function toggleContainerContents(container) {
      var sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('hidden'); 
    }





    var quizQuestions = [
      {
        question: "What is the capital of France?",
        answer: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
      },
      // Add more questions here
      {
        question: "what is the largest continent in the world?",
        answer: "Asia"
      },
      {
        question:"Which country is home to the famous ancient monument Stonehenge?",
        answer: "United Kingdom"
      },
      {
        question:"What is the longest river in the world?",
        answer: "River nile"
      },
    ];
    
    var currentQuestion = 0;
    var score = 0;
    
    function displayQuestion() {
      var questionElement = document.getElementById("question");
      var answerElement = document.getElementById("answer");
      var resultElement = document.getElementById("result");
    
      if (currentQuestion >= quizQuestions.length) {
        // Quiz is complete, display the score
        questionElement.textContent = "Quiz Complete!";
        answerElement.style.display = "none";
        resultElement.textContent =
          "Your Score: " + score + "/" + quizQuestions.length;
        return;
      }
    
      questionElement.textContent = quizQuestions[currentQuestion].question;
      answerElement.value = "";
      resultElement.textContent = "";
    }
    
    function checkAnswer() {
      var userAnswer = document.getElementById("answer").value.trim();
      var correctAnswer = quizQuestions[currentQuestion].answer;
    
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById("result").textContent = "Correct!";
      } else {
        document.getElementById("result").textContent = "Incorrect!";
      }
    
      currentQuestion++;
      displayQuestion();
    }
    
    displayQuestion();
    