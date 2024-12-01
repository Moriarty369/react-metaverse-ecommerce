---

# 🚀 **JuniorCrafters** 🚀

**JuniorCrafters** is a web platform designed to offer coding courses through an online store. Students can explore various courses, purchase them, and gain access to high-quality educational materials.

---

## 🏆 **Hackathon Recognition**

We are proud to announce that **JuniorCrafters** won **2nd place** at the **Hackathon February 2024** held in **Madrid**, organized by **Globant** and **Factoría F5**. This accomplishment showcases the dedication and innovation of our team.

![Diploma Image](https://github.com/user-attachments/assets/1bc7f81e-b012-4add-a9e1-14c0bbc51c2b)

---

## 💻 **Technologies Used**

### Frontend
- **Frameworks & Libraries:**  
  - React v18.2.0  
  - React DOM v18.2.0  
  - React Hook Form v7.50.1  
  - React Router DOM v6.22.1  

- **Styling:**  
  - Emotion (React & Styled)  
  - Material-UI and MUI Icons  
  - FontAwesome  

- **Additional Dependencies:**  
  - Axios for HTTP requests  
  - Lodash for utility functions  
  - Three.js for 3D rendering  

### Backend
- **Framework:** Spring Boot 3.2.2  
- **Programming Language:** Java 17  
- **Database:** H2 (embedded, runtime), MySQL for production  

- **Core Dependencies:**  
  - Spring Boot Starter Web  
  - Spring Boot Starter Data JPA  
  - Spring Boot DevTools  

### Development Tools
- Vite v5.1.0 for fast builds and development  
- ESLint for linting  
- Cypress for end-to-end testing  
- Vitest for unit testing  
- Maven for backend builds and dependency management  

---

## 📢 **How to Use**

### Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/Moriarty369/react-metaverse-ecommerce.git
   ```
2. **Navigate to the project directory**  
   ```bash
   cd juniorcrafters
   ```

3. **Install frontend dependencies**  
   ```bash
   yarn install
   ```

4. **Navigate to the backend directory**  
   ```bash
   cd backend
   ```

5. **Build the backend project using Maven**  
   ```bash
   mvn clean install
   ```

### Development
To start the frontend development server:  
```bash
yarn dev
```  
The frontend will be accessible at:  
`http://localhost:3000`

To start the backend server:  
```bash
mvn spring-boot:run
```  
The backend will be accessible at:  
`http://localhost:8080`

### Production Build
To create a production-ready build for the frontend:  
```bash
yarn build
```  
The optimized files will be generated in the `dist/` directory and can be deployed.

---

## 🌐 **Backend Overview**

### 📂 **Backend Structure**
The backend is implemented using the Spring Boot framework and follows a standard MVC architecture:  

- **`BackendApplication.java`**: Entry point for the application.  
- **`controllers/`**: REST controllers defining the API endpoints.  
- **`models/`**: Data models/entities representing the database schema.  
- **`repository/`**: JPA repositories for database interactions.  
- **`services/`**: Business logic and application-level services.  
- **`config/`**: Configuration files for security, database settings, and more.  

### 🔗 **API Endpoints** (Sample)
| HTTP Method | Endpoint             | Description              |
|-------------|----------------------|--------------------------|
| GET         | `/api/courses`       | Retrieve all courses     |
| POST        | `/api/courses`       | Create a new course      |
| GET         | `/api/courses/{id}`  | Retrieve a single course |
| PUT         | `/api/courses/{id}`  | Update a course          |
| DELETE      | `/api/courses/{id}`  | Delete a course          |

### 🛠️ **Database Configuration**
- **Development:** H2 Database (In-Memory)  
  - Access the console at: `http://localhost:8080/h2-console`  
  - Default settings are provided in `application.properties`.  

- **Production:** MySQL  
  Ensure proper configuration of the database credentials in `application.properties` before deployment.

---

## 🔨 **How to Contribute**

We welcome contributions to enhance **JuniorCrafters**. Here's how you can help:  
1. Fork the repository.  
2. Create a new branch for your changes:  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and ensure all tests pass.  
4. Submit a pull request to the main branch.

---

## 🎮 **Beta Version: Metaverse Easter Egg**

As a fun addition to the platform, we've included a **Metaverse Easter Egg** as part of the beta version! This immersive experience is unlocked once a user completes their registration on the platform.

### 🚪 **How to Access the Metaverse:**
1. Register an account on the platform.
2. After registration, a special button will appear on your dashboard, leading you into the Metaverse.

This Easter Egg is a playful exploration of UX/UI principles, where you can interact with 3D elements designed using **Three.js**. It's a small reward for users who take the time to sign up, and serves as a demonstration of our ability to integrate advanced UI/UX concepts.

> **Note**: This feature is still in its beta phase, and we plan to expand its functionality with more interactive elements and experiences in future releases.

### 🖥️ **See the Metaverse in Action:**
(Insert short video showing the Metaverse experience here)


https://github.com/user-attachments/assets/2c4b0269-af12-4514-8ac9-bbb4627517ab


---

## 📂 **Project Structure**

### Frontend
- **`src/`**: Contains all the source files.  
- **`public/`**: Static assets.  
- **`dist/`**: Output folder for production builds.  

### Backend
- **`src/main/java/hackaton3/backend/`**: Main Java source files.  
- **`src/main/resources/`**: Configuration files like `application.properties`.  
- **`target/`**: Compiled output after Maven build.  

---

## ✒️ **Authors**

This project has been developed by a talented team:  
- Alba Martín  
- Viviana Sánchez  
- Vero Sampedro  
- Abelardo Acosta  
- Victor M. Menénde  
- Estefania Bartolome  
- Jéssica Solórzano  

---

## 📈 **Additional Information**

### Key Features
- Comprehensive course browsing and purchasing system.  
- Responsive and visually appealing design.  
- Advanced filtering and search functionality.  

### Future Enhancements
- User profile management.  
- Integration with third-party payment gateways.  
- Advanced analytics for user progress tracking.  

**Explore coding with JuniorCrafters! 🚀🎓**

---

### Notes:
1. Replace placeholders like `your-username` with actual project details.  
2. Include updated screenshots if available to improve documentation.  
3. Ensure links to live demo or deployment (if applicable) are included.
