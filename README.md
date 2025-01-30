
# **QR-Code Genrator**  

A brief guide on how to start and deploy this project.  

---

## **Author**  

[![Portfolio](https://img.shields.io/badge/My_Portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shubham09anand.in/)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/subham09anand/)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/shubham09anand/)  
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/u/shubham09anand)  

---

## 🔗 Links  

<p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCD0vGmt0p-HZ_Xe6LGeDbOEyWqAl6mL7hA&s" style="height: 50px; width: 50px; margin-right: 10px;" />
  <b>QR Code Generator</b>: <a href="https://qrcode.shubham09anand.in/">https://qrcode.shubham09anand.in/</a>
</p>  

---

## **Deployment**  

To deploy this project, follow these steps:  

### **Setup Instructions**  

#### Prerequisites  
1. **Install Docker**: Ensure Docker is installed on your system. Download it from [Docker’s official website](https://www.docker.com/).  
2. **Install Docker Compose**: Docker Compose is typically included with Docker Desktop. Confirm installation by running:  
   ```bash
   docker-compose --version
   ```  

---

### **Run the Image from Docker Hub**  

To start the application using the pre-built Docker image, run:  
```bash
docker run -p 3000:3000 -d shubham09anand/qr_code_generator
```

---

## **Build the Image Locally**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/shubham09anand/QrCodeGenerator.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd QrCodeGenerator
   ```
3. Build the Docker image:  
   ```bash
   docker build -t <image_name> .
   ```
4. Run the Docker container:  
   ```bash
   docker run -p 3000:3000 -d shubham09anand/qr_code_generator
   ```

---

### **Access the Application**  
- Open your browser and visit: [http://127.0.0.1:3000](http://127.0.0.1:3000)  

---
