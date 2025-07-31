const BASE_URL = "http://localhost:8080";

document.getElementById("loginForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const userData = {
    username: username,
    password: password
  };

  try {
    const response = await fetch(BASE_URL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("userId", result.id);  // Make sure backend returns full user object
      window.location.href = "matches.html";
    } else {
      alert(result.message || "Login failed!");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
