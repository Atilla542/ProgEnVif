function submitQuiz() 
{
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    const q3 = document.getElementById("q3").value;

    let score = 0;
    const totalQuestions = 3;  

    if (q1 && q1.value === "Vrai") score++;
    const correctAnswersQ2 = ["Efe", "Yelda", "Atilla"];
    const selectedAnswersQ2 = Array.from(q2).map(input => input.value);
    if (
      selectedAnswersQ2.length === correctAnswersQ2.length &&
      selectedAnswersQ2.every(answer => correctAnswersQ2.includes(answer))
    ) score++;
      var userAnswer = document.getElementById('q3').value.trim().toLowerCase();
      var correctAnswer = "Pas de clemence pour les kuffars"; 
    if (userAnswer === correctAnswer.toLowerCase()) score++;
    alert("Votre score est de : " + score+ "/" + totalQuestions);
  }
  
