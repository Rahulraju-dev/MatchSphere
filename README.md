MatchSphere - Match Recommendation System

MatchSphere is a full-stack matchmaking application built using **Java Spring Boot** for the backend and **HTML/CSS/JavaScript** for the frontend. It recommends the best user matches based on age difference and shared interests.

This is my **first end-to-end java project**, focused on building clean REST APIs and connecting them to a responsive frontend.

## 🔧 Features

### 👨‍💻 Backend (Spring Boot)
- User registration and login
- Get users by ID, name, age, email, or phone
- Filter users by gender (male/female)
- Search users by partial name or email
- Recommend top N best matches using:
  - Opposite gender filter
  - Common interests
  - Minimum age gap

### 🌐 Frontend (HTML/CSS/JavaScript)
- User-friendly UI for:
  - Registering new users
  - Viewing best matches
  - 
- Uses Fetch API to connect to backend

## 🛠 Tech Stack

| Layer     | Technologies Used                     |
|-----------|----------------------------------------|
| Backend   | Java, Spring Boot, Spring Data JPA     |
| Database  | MySQL                                  |
| Frontend  | HTML, CSS, JavaScript                  |
| Tools     | Postman, Maven, Lombok, Git, GitHub    |

---

## 📬 Sample API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users` | Register a new user |
| `POST` | `/api/users/login` | User login |
| `GET`  | `/users/best-match/{id}/{top}` | Get top N best matches |
| `GET`  | `/users/gender/male` | Get all male users |
| `GET`  | `/users/search/name/{letters}` | Search users by name |

---

## 🚀 Getting Started

### Backend Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Rahulraju-dev/MatchSphere.git
   cd MatchSphere
Configure MySQL Database
Edit application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/matchsphere_db
spring.datasource.username=your_username
spring.datasource.password=your_password
Run the App
Run DatingRecomendationEngineApplication.java from your IDE.

Test APIs
Use Postman to test the endpoints.

Frontend Setup
Go to Frontend_updated/ folder.

Open login.html, register.html, or matches.html in a browser.

Ensure the backend is running to fetch real-time data.

📌 Project Status
✅ Backend: Completed

✅ Frontend: Completed and connected

🚀 Deployed: Coming Soon

📸 Screenshots (Optional)
(You can add screenshots of your frontend UI or Postman test results here)

🙋‍♂️ Author
Rahul Raju
🎓 B.Tech CSE | Backend & Web Development Enthusiast
🔗 GitHub
🔗 LinkedIn

