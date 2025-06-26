// Quiz Logic
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === 4) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Try again!";
    result.style.color = "red";
  }
}

function checkAnswer1(answer) {
  const result = document.getElementById("quiz-result1");
  if (answer === 4) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Try again!";
    result.style.color = "red";
  }
}


// API Fetch (Joke)
function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeDisplay").textContent = data.joke;
    })
    .catch(err => {
      document.getElementById("jokeDisplay").textContent = "Failed to fetch joke.";
    });
}
