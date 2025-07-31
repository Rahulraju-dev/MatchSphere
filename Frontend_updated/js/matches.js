const BASE_URL = "http://localhost:8080";

const userId = localStorage.getItem("userId");

if (!userId) {
  alert("Please login first.");
  window.location.href = "login.html";
}

async function loadMatches() {
  try {
    const response = await fetch(`${BASE_URL}/users/best-match/${userId}/5`);
    const matches = await response.json();

    const matchList = document.getElementById("matchList");

    if (matches.length === 0) {
      matchList.innerHTML = "<p>No matches found.</p>";
      return;
    }

    matches.forEach(match => {
      const card = document.createElement("div");
      card.className = "match-card";
      card.innerHTML = `
        <h4>${match.name}</h4>
        <p>Gender: ${match.gender}</p>
        <p>Age: ${match.age}</p>
        <p>Interests: ${match.interests.join(', ')}</p>
      `;
      matchList.appendChild(card);
    });
  } catch (error) {
    alert("Error loading matches: " + error.message);
  }
}

loadMatches();

function logout() {
  localStorage.removeItem("userId");
  alert("You have been logged out.");
  window.location.href = "login.html";
}
