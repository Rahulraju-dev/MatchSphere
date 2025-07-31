document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // ❌ Prevent default GET form submission

  const interestsInput = document.getElementById('interests').value;
  const interestsArray = interestsInput.split(',').map(item => item.trim());

 const userData = {
  username: document.getElementById('username').value,
  email: document.getElementById('email').value,
  gender: document.getElementById('gender').value,
  age: parseInt(document.getElementById('age').value),
  phone: document.getElementById('phone').value,  // 👉 Add this
  interests: interestsArray,
  password: document.getElementById('password').value
};


  try {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "login.html";
    } else {
      const errData = await response.json();
      alert("Registration failed: " + (errData.message || "Unknown error"));
    }

  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during registration.");
  }
});
