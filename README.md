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

---

¡Claro! Es perfectamente válido tener una versión en español debajo de la versión en inglés en el mismo archivo README. Esto es muy común para proyectos que quieren llegar a una audiencia global, y tener ambos idiomas mejora la accesibilidad. Aquí te dejo una versión bilingüe del README, comenzando con la versión en inglés, seguida de la versión en español.

Te agrego también la URL del repositorio al final, como solicitaste:

---

# 🚀 **JuniorCrafters** 🚀

**JuniorCrafters** is a web platform designed to offer coding courses through an online store. Students can explore various courses, purchase them, and gain access to high-quality educational materials.

---

## 🏆 **Hackathon Recognition**

We are proud to announce that **JuniorCrafters** won **2nd place** at the **Hackathon February 2024** held in **Madrid**, organized by **Globant** and **Factoría F5**. This accomplishment showcases the dedication and innovation of our team.

![Diploma Image](path-to-your-image.jpg)

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
   git clone https://github.com/your-username/juniorcrafters.git
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

---

---

# 🚀 **JuniorCrafters** 🚀

**JuniorCrafters** es una plataforma web diseñada para ofrecer cursos de programación a través de una tienda en línea. Los estudiantes pueden explorar varios cursos, comprarlos y obtener acceso a materiales educativos de alta calidad.

---

## 🏆 **Reconocimiento en la Hackathon**

Nos enorgullece anunciar que **JuniorCrafters** obtuvo **el segundo lugar** en la **Hackathon de febrero 2024** celebrada en **Madrid**, organizada por **Globant** y **Factoría F5**. Este logro resalta la dedicación e innovación de nuestro equipo.

![Imagen del Diploma](https://github.com/user-attachments/assets/1bc7f81e-b012-4add-a9e1-14c0bbc51c2b)

---

## 💻 **Tecnologías Usadas**

### Frontend
- **Frameworks y Bibliotecas:**  
  - React v18.2.0  
  - React DOM v18.2.0  
  - React Hook Form v7.50.1  
  - React Router DOM v6.22.1  

- **Estilo:**  
  - Emotion (React & Styled)  
  - Material-UI y MUI Icons  
  - FontAwesome  

- **Dependencias Adicionales:**  
  - Axios para solicitudes HTTP  
  - Lodash para funciones auxiliares  
  - Three.js para renderizado 3D  

### Backend
- **Framework:** Spring Boot 3.2.2  
- **Lenguaje de Programación:** Java 17  
- **Base de Datos:** H2 (integrada, en tiempo de ejecución), MySQL para producción  

- **Dependencias Principales:**  
  - Spring Boot Starter Web  
  - Spring Boot Starter Data JPA  
  - Spring Boot DevTools  

### Herramientas de Desarrollo
- Vite v5.1.0 para compilaciones rápidas y desarrollo  
- ESLint para análisis estático de código  
- Cypress para pruebas de extremo a extremo  
- Vitest para pruebas unitarias  
- Maven para construcción de backend y gestión de dependencias  

---

## 📢 **Cómo Usar**

### Instalación
1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/Moriarty369/react-metaverse-ecommerce.git
   ```
2. **Navega al directorio del proyecto**  
   ```bash
   cd juniorcrafters
   ```

3. **Instala las dependencias del frontend**  
   ```bash
   yarn install
   ```

4. **Navega al directorio del backend**  
   ```bash
   cd backend
   ```

5. **Construye el proyecto del backend usando Maven**  
   ```bash
   mvn clean install
   ```

### Desarrollo
Para iniciar el servidor de desarrollo del frontend:  
```bash
yarn dev
```  
El frontend estará disponible en:  
`http://localhost:3000`

Para iniciar el servidor del backend:  
```bash


mvn spring-boot:run
```  
El backend estará disponible en:  
`http://localhost:8080`

### Construcción para Producción
Para crear una construcción lista para producción del frontend:  
```bash
yarn build
```  
Los archivos optimizados se generarán en el directorio `dist/` y pueden ser desplegados.

---

## 🌐 **Descripción del Backend**

### 📂 **Estructura del Backend**
El backend está implementado usando el framework Spring Boot y sigue una arquitectura MVC estándar:  

- **`BackendApplication.java`**: Punto de entrada de la aplicación.  
- **`controllers/`**: Controladores REST que definen los puntos finales de la API.  
- **`models/`**: Modelos de datos/entidades que representan el esquema de la base de datos.  
- **`repository/`**: Repositorios JPA para la interacción con la base de datos.  
- **`services/`**: Lógica de negocio y servicios a nivel de aplicación.  
- **`config/`**: Archivos de configuración para seguridad, configuración de base de datos y más.  

### 🔗 **Puntos Finales de la API** (Ejemplo)
| Método HTTP | Endpoint             | Descripción              |
|-------------|----------------------|--------------------------|
| GET         | `/api/courses`       | Obtener todos los cursos     |
| POST        | `/api/courses`       | Crear un nuevo curso      |
| GET         | `/api/courses/{id}`  | Obtener un curso específico |
| PUT         | `/api/courses/{id}`  | Actualizar un curso          |
| DELETE      | `/api/courses/{id}`  | Eliminar un curso          |

### 🛠️ **Configuración de la Base de Datos**
- **Desarrollo:** Base de datos H2 (en memoria)  
  - Accede a la consola en: `http://localhost:8080/h2-console`  
  - Los ajustes predeterminados están disponibles en `application.properties`.  

- **Producción:** MySQL  
  Asegúrate de configurar correctamente las credenciales de la base de datos en `application.properties` antes de la implementación.

---

## 🔨 **Cómo Contribuir**

Damos la bienvenida a contribuciones para mejorar **JuniorCrafters**. Aquí te mostramos cómo puedes ayudar:  
1. Haz un fork del repositorio.  
2. Crea una nueva rama para tus cambios:  
   ```bash
   git checkout -b feature/nombre-de-tu-caracteristica
   ```
3. Realiza tus cambios y asegúrate de que todas las pruebas pasen.  
4. Envía un pull request a la rama principal.

---

## 📂 **Estructura del Proyecto**

### Frontend
- **`src/`**: Contiene todos los archivos fuente.  
- **`public/`**: Activos estáticos.  
- **`dist/`**: Carpeta de salida para las construcciones de producción.  

### Backend
- **`src/main/java/hackaton3/backend/`**: Archivos fuente principales en Java.  
- **`src/main/resources/`**: Archivos de configuración como `application.properties`.  
- **`target/`**: Salida compilada después de la construcción con Maven.  

---

## ✒️ **Autores**

Este proyecto ha sido desarrollado por un talentoso equipo:  
- Alba Martín  
- Viviana Sánchez  
- Vero Sampedro  
- Abelardo Acosta  
- Victor M. Menénde  
- Estefania Bartolome  
- Jéssica Solórzano  

---

## 📈 **Información Adicional**

### Características Clave
- Sistema completo de navegación y compra de cursos.  
- Diseño atractivo y adaptable.  
- Funcionalidades avanzadas de búsqueda y filtrado.  

### Mejoras Futuras
- Gestión de perfiles de usuario.  
- Integración con pasarelas de pago de terceros.  
- Análisis avanzado para el seguimiento del progreso de los estudiantes.  

**¡Explora la programación con JuniorCrafters! 🚀🎓**

---

### Notas:
1. Reemplaza los placeholders como `your-username` con los detalles reales del proyecto.  
2. Añade capturas de pantalla actualizadas si están disponibles para mejorar la documentación.  
3. Asegúrate de incluir enlaces al demo en vivo o a la implementación (si aplica).

---
