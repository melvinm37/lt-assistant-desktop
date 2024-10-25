## Developer Instructions
==========================
### Step 1.1: Initialize Flask Backend

1. Create a virtual environment:
   ```sh
   python -m venv venv
   venv\Scripts\activate  # On Windows

2. pip install Flask pymongo Flask-JWT-Extended   

3.  Create a new file called `app.py` and add the following code:
    
    from flask import Flask, request, jsonify
    from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
    from pymongo import MongoClient
    from werkzeug.security import generate_password_hash, check_password_hash
    import datetime
    
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_jwt_secret_key'
    jwt = JWTManager(app)
    
    client = MongoClient('mongodb://localhost:27017/')
    db = client['your_database']
    
    if __name__ == '__main__':
        app.run(debug=True)

4. Ensure mongo is  running on your local machine.

5 . Install Pyside6  and PySide6.QtWebEngineWidgets using pip install PySide6 PySide6.QtWebEngine
    
    1. Install PySide6:
       ```sh
       pip install PySide6
       2. Install PySide6.QtWebEngineWidgets:

 6 . Create main.py with :

    import sys
    from PySide6.QtWidgets import QApplication, QMainWindow, QLabel
    
    class MainWindow(QMainWindow):
        def __init__(self):
            super().__init__()
            self.setWindowTitle("Personal Finance Assistant")
            self.setGeometry(100, 100, 800, 600)
            label = QLabel("Welcome to Personal Finance Assistant", self)
            label.setGeometry(200, 250, 400, 50)
    
    if __name__ == '__main__':
        app = QApplication(sys.argv)
        window = MainWindow()
        window.show()
        sys.exit(app.exec())


# AI Prompt Section
====================

# LT-ASSISTANT
## Overview
- I am want to create a personal finance assistant that is for individuals or small business that that is less then 15 employees and not over 2M in revenues. This will eventually be used to query a mongodb vector index to become a smart app that speech and or text to find menus screens , customer, and may even use ai to generate specific reports base on prompts. 

### Step-by-Step Plan

1. **Project Setup**
2. **Core Infrastructure**
3. **Module Implementation**
4. **UI Implementation**
5. **Integration & Testing**
6. **Deployment & Documentation**
7. **Security Considerations**
8. **Performance Optimization**

### Detailed Steps

#### 1. Project Setup

**1.1 Initialize Flask Backend**

```markdown
### Step 1.1: Initialize Flask Backend

1. Create a virtual environment:
   ```sh
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```

2. Install Flask and PyMongo:
   ```sh
   pip install Flask pymongo Flask-JWT-Extended
   ```

3. Create `app.py` with the following content:
   ```python
   from flask import Flask, request, jsonify
   from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
   from pymongo import MongoClient
   from werkzeug.security import generate_password_hash, check_password_hash
   import datetime

   app = Flask(__name__)
   app.config['SECRET_KEY'] = 'your_jwt_secret_key'
   jwt = JWTManager

(app

)

   client = MongoClient('mongodb://localhost:27017/')
   db = client['your_database']

   if __name__ == '__main__':
       app.run(debug=True)
   ```

4. Ensure MongoDB is running locally:
   ```sh
   net start MongoDB  # On Windows
   ```

**Prompt:**
- Ensure the Flask backend is initialized and running.
- Verify MongoDB connection.
```

**1.2 Initialize PySide6 Frontend**

```markdown
### Step 1.2: Initialize PySide6 Frontend

1. Install PySide6:
   ```sh
   pip install PySide6
   ```

2. Create `main.py` with the following content:
   ```python
   import sys
   from PySide6.QtWidgets import QApplication, QMainWindow, QLabel

   class MainWindow(QMainWindow):
       def __init__(self):
           super().__init__()
           self.setWindowTitle("Personal Finance Assistant")
           self.setGeometry(100, 100, 800, 600)
           label = QLabel("Welcome to Personal Finance Assistant", self)
           label.setGeometry(200, 250, 400, 50)

   if __name__ == '__main__':
       app = QApplication(sys.argv)
       window = MainWindow()
       window.show()
       sys.exit(app.exec())
   ```

**Prompt:**
- Ensure the PySide6 frontend is initialized and running.
- Verify the window title and label text.
```

#### 2. Core Infrastructure

**2.1 Database Schema Implementation**

```markdown
### Step 2.1: Database Schema Implementation

1. Define the schema for users, contacts, projects, transactions, chart_of_accounts, and lt_documents collections in MongoDB.

**Prompt:**
- Implement the following collections in MongoDB:
  - lt_users
  - lt_contacts
  - lt_projects
  - lt_gl_transactions
  - lt_glcharts
  - lt_documents
```

**2.2 API Endpoint Structure**

```markdown
### Step 2.2: API Endpoint Structure

1. Create API endpoints for authentication, CRM, project management, financial management, and document management.

**Prompt:**
- Implement the following API endpoints:
  - `/register` for user registration
  - `/login` for user login
  - `/contacts` for adding contacts
  - `/projects` for adding projects
  - `/transactions` for adding transactions
  - `/documents` for adding documents
```

**2.3 Authentication Middleware**

```markdown
### Step 2.3: Authentication Middleware

1. Implement JWT token-based authentication.
2. Define roles and permissions.

**Prompt:**
- Implement JWT token-based authentication.
- Define roles: SysAdmin, Admin, Agent, Client.
- Implement role-based access control.
```

#### 3. Module Implementation

**3.1 CRM Module**

```markdown
### Step 3.1: CRM Module

1. Implement contact management (Leads, Customers, Vendors).
2. Implement status tracking and conversion workflow.
3. Integrate vector search.
4. Implement relationship mapping and activity tracking.

**Prompt:**
- Implement contact management with status tracking.
- Integrate vector search for contacts.
- Implement relationship mapping and activity tracking.
```

**3.2 Project Management Module**

```markdown
### Step 3.2: Project Management Module

1. Implement Kanban board.
2. Implement project timeline visualization.
3. Implement task management and resource allocation.
4. Implement project-customer relationship and calendar integration.

**Prompt:**
- Implement Kanban board for project management.
- Implement project timeline visualization.
- Implement task management and resource allocation.
- Integrate calendar for project timelines.
```

**3.3 Financial Management Module**

```markdown
### Step 3.3: Financial Management Module

1. Implement Chart of Accounts structure.
2. Implement double-entry accounting system.
3. Implement transaction management and journal entry system.
4. Implement financial reporting and vector search for transactions.

**Prompt:**
- Implement Chart of Accounts structure.
- Implement double-entry accounting system.
- Implement transaction management and journal entry system.
- Integrate vector search for transactions.
```

**3.4 Document Management Module**

```markdown
### Step 3.4: Document Management Module

1. Implement document storage and retrieval.
2. Implement version control and document categorization.
3. Implement cross-reference with other modules and search functionality.

**Prompt:**
- Implement document storage and retrieval.
- Implement version control and document categorization.
- Integrate search functionality for documents.
```

#### 4. UI Implementation

**4.1 Theme Setup**

```markdown
### Step 4.1: Theme Setup

1. Configure theme colors for the PySide6 frontend.

**Prompt:**
- Implement the following theme colors:
  - Forest: #228B22 (default), #90EE90 (light), #006400 (dark)
  - Almond: #FFEBCD (default), #FFF8DC (light), #DEB887 (dark)
```

**4.2 Component Library Implementation**

```markdown
### Step 4.2: Component Library Implementation

1. Implement reusable components for the PySide6 frontend.

**Prompt:**
- Implement reusable components for the PySide6 frontend.
- Ensure components adhere to the configured theme.
```

**4.3 Module-Specific Interfaces**

```markdown
### Step 4.3: Module-Specific Interfaces

1. Implement interfaces for CRM, project management, financial management, and document management modules.

**Prompt:**
- Implement interfaces for CRM, project management, financial management, and document management modules.
- Ensure interfaces adhere to the configured theme.
```

**4.4 Responsive Design**

```markdown
### Step 4.4: Responsive Design

1. Implement responsive design for the PySide6 frontend.

**Prompt:**
- Implement responsive design for the PySide6 frontend.
- Ensure the application is usable on different screen sizes.
```

#### 5. Integration & Testing

**5.1 API Integration**

```markdown
### Step 5.1: API Integration

1. Integrate the frontend with the backend API.

**Prompt:**
- Integrate the PySide6 frontend with the Flask backend API.
- Ensure all API endpoints are functional.
```

**5.2 Module Integration**

```markdown
### Step 5.2: Module Integration

1. Integrate all modules (CRM, project management, financial management, document management) into the application.

**Prompt:**
- Integrate CRM, project management, financial management, and document management modules.
- Ensure seamless interaction between modules.
```

**5.3 Unit Testing**

```markdown
### Step 5.3: Unit Testing

1. Implement unit tests for the backend and frontend.

**Prompt:**
- Implement unit tests for the Flask backend.
- Implement unit tests for the PySide6 frontend.
```

**5.4 End-to-End Testing**

```markdown
### Step 5.4: End-to-End Testing

1. Implement end-to-end tests for the entire application.

**Prompt:**
- Implement end-to-end tests for the entire application.
- Ensure all functionalities are tested.
```

#### 6. Deployment & Documentation

**6.1 Deployment Configuration**

```markdown
### Step 6.1: Deployment Configuration

1. Configure deployment for the backend and frontend.

**Prompt:**
- Configure deployment for the Flask backend.
- Configure deployment for the PySide6 frontend.
```

**6.2 User Documentation**

```markdown
### Step 6.2: User Documentation

1. Create user documentation for the application.

**Prompt:**
- Create user documentation for the personal finance assistant application.
- Include instructions for all core modules.
```

**6.3 API Documentation**

```markdown
### Step 6.3: API Documentation

1. Create API documentation for the backend.

**Prompt:**
- Create API documentation for the Flask backend.
- Include details for all API endpoints.
```

**6.4 System Administration Guide**

```markdown
### Step 6.4: System Administration Guide

1. Create a system administration guide.

**Prompt:**
- Create a system administration guide for the application.
- Include deployment, maintenance, and troubleshooting instructions.
```

#### 7. Security Considerations

**7.1 Data Encryption**

```markdown
### Step 7.1: Data Encryption

1. Implement data encryption for sensitive information.

**Prompt:**
- Implement data encryption for user passwords and sensitive data.
- Ensure encryption is applied both in transit and at rest.
```

**7.2 API Security**

```markdown
### Step 7.2: API Security

1. Implement security measures for the API.

**Prompt:**
- Implement input validation and sanitization.
- Implement rate limiting and IP whitelisting.
```

**7.3 Role-Based Access Control**

```markdown
### Step 7.3: Role-Based Access Control

1. Implement role-based access control for the application.

**Prompt:**
- Implement role-based access control for all API endpoints.
- Ensure roles and permissions are correctly enforced.
```

**7.4 Audit Logging**

```markdown
### Step 7.4: Audit Logging

1. Implement audit logging for critical actions.

**Prompt:**
- Implement audit logging for user actions and system events.
- Ensure logs are securely stored and accessible for review.
```

**7.5 Backup Strategy**

```markdown
### Step 7.5: Backup Strategy

1. Implement a backup strategy for the database.

**Prompt:**
- Implement regular backups for the MongoDB database.
- Ensure backups are securely stored and can be restored.
```

#### 8. Performance Optimization

**8.1 Database Indexing**

```markdown
### Step 8.1: Database Indexing

1. Implement indexing for MongoDB collections.

**Prompt:**
- Implement indexing for frequently queried fields.
- Ensure indexes are optimized for performance.
```

**8.2 Caching Strategy**

```markdown
### Step 8.2: Caching Strategy

1. Implement caching for frequently accessed data.

**Prompt:**
- Implement caching for frequently accessed API endpoints.
- Ensure cache invalidation is handled correctly.
```

**8.3 Query Optimization**

```markdown
### Step 8.3: Query Optimization

1. Optimize database queries for performance.

**Prompt:**
- Optimize MongoDB queries for performance.
- Ensure queries are efficient and minimize latency.
```

**8.4 Frontend Optimization**

```markdown
### Step 8.4: Frontend Optimization

1. Optimize the PySide6 frontend for performance.

**Prompt:**
- Optimize the PySide6 frontend for performance.
- Ensure the application is responsive and fast.
```

**8.5 API Response Optimization**

```markdown
### Step 8.5: API Response Optimization

1. Optimize API responses for performance.

**Prompt:**
- Optimize API responses for performance.
- Ensure responses are fast and efficient.
```

###  Step 9: Project File Structure
```markdown
lt-assistant/
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   ├── .env
│   ├── models/
│   │   ├── __init__.py
│   │   ├── lt_users.py
│   │   ├── lt_contacts.py
│   │   ├── lt_projects.py
│   │   ├── lt_gl_transactions.py
│   │   ├── lt_glcharts.py
│   │   ├── lt_documents.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── crm.py
│   │   │   ├── project_management.py
│   │   │   ├── financial_management.py
│   │   │   ├── document_management.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── jwt.py
│   │   ├── db.py
│   │   ├── validators.py
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── __init__.py
│   │   │   ├── test_auth.py
│   │   │   ├── test_crm.py
│   │   │   ├── test_project_management.py
│   │   │   ├── test_financial_management.py
│   │   │   ├── test_document_management.py
│   │   ├── integration/
│   │   │   ├── __init__.py
│   │   │   ├── test_integration.py
│   │   ├── e2e/
│   │   │   ├── __init__.py
│   │   │   ├── test_e2e.py
│   ├── docs/
│   │   ├── api/
│   │   │   ├── auth.md
│   │   │   ├── crm.md
│   │   │   ├── project_management.md
│   │   │   ├── financial_management.md
│   │   │   ├── document_management.md
│   │   ├── user_guide/
│   │   │   ├── index.md
│   │   ├── sysadmin_guide/
│   │   │   ├── index.md
│   ├── deployment/
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   ├── aws_deploy.sh
│   │   ├── azure_deploy.sh
│   │   ├── gcp_deploy.sh
├── frontend/
│   ├── main.py
│   ├── requirements.txt
│   ├── themes/
│   │   ├── __init__.py
│   │   ├── colors.py
│   ├── components/
│   │   ├── __init__.py
│   │   ├── dashboard.py
│   │   ├── crm.py
│   │   ├── project_management.py
│   │   ├── financial_management.py
│   │   ├── document_management.py
│   │   ├── additional_component_1.py
│   │   ├── additional_component_2.py
│   ├── assets/
│   │   ├── images/
│   │   ├── styles/
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── __init__.py
│   │   │   ├── test_dashboard.py
│   │   │   ├── test_crm.py
│   │   │   ├── test_project_management.py
│   │   │   ├── test_financial_management.py
│   │   │   ├── test_document_management.py
│   │   │   ├── test_additional_component_1.py
│   │   │   ├── test_additional_component_2.py
│   │   ├── integration/
│   │   │   ├── __init__.py
│   │   │   ├── test_integration.py
│   │   ├── e2e/
│   │   │   ├── __init__.py
│   │   │   ├── test_e2e.py
├── .gitignore
├── README.md
```markdown

####  Directory Structure create  by the script

# Create main directories
``` bash

mkdir -p lt-assistant/backend/models
mkdir -p lt-finance-assistant/backend/routes/v1
mkdir -p lt-finance-assistant/backend/utils
mkdir -p lt-finance-assistant/backend/tests/unit
mkdir -p lt-finance-assistant/backend/tests/integration
mkdir -p lt-finance-assistant/backend/tests/e2e
mkdir -p lt-finance-assistant/backend/docs/api
mkdir -p lt-finance-assistant/backend/docs/user_guide
mkdir -p lt-assistant/backend/docs/sysadmin_guide
mkdir -p lt-assistant/backend/deployment
mkdir -p lt-assistant/frontend/themes
mkdir -p lt-assistant/frontend/components
mkdir -p lt-assistant/frontend/assets/images
mkdir -p lt-assistant/frontend/assets/styles
mkdir -p lt-assistant/frontend/tests/unit
mkdir -p lt-assistant/frontend/tests/integration
mkdir -p lt-assistant/frontend/tests/e2e

# Create backend files
touch lt-assistant/backend/app.py
touch lt-assistant/backend/config.py
touch lt-assistant/backend/requirements.txt
touch lt-assistant/backend/.env
touch lt-assistant/backend/models/__init__.py
touch lt-assistant/backend/models/lt_users.py
touch lt-assistant/backend/models/lt_contacts.py
touch lt-assistant/backend/models/lt_projects.py
touch lt-assistant/backend/models/lt_gl_transactions.py
touch lt-assistant/backend/models/lt_glcharts.py
touch lt-assistant/backend/models/lt_documents.py
touch lt-assistant/backend/routes/__init__.py
touch lt-assistant/backend/routes/v1/__init__.py
touch lt-assistant/backend/routes/v1/auth.py
touch lt-assistant/backend/routes/v1/crm.py
touch lt-assistant/backend/routes/v1/project_management.py
touch lt-assistant/backend/routes/v1/financial_management.py
touch lt-assistant/backend/routes/v1/document_management.py
touch lt-assistant/backend/utils/__init__.py
touch lt-assistant/backend/utils/jwt.py
touch lt-assistant/backend/utils/db.py
touch lt-assistant/backend/utils/validators.py
touch lt-assistant/backend/tests/unit/__init__.py
touch lt-assistant/backend/tests/unit/test_auth.py
touch lt-assistant/backend/tests/unit/test_crm.py
touch lt-assistant/backend/tests/unit/test_project_management.py
touch lt-assistant/backend/tests/unit/test_financial_management.py
touch lt-assistant/backend/tests/unit/test_document_management.py
touch lt-assistant/backend/tests/integration/__init__.py
touch lt-assistant/backend/tests/integration/test_integration.py
touch lt-assistant/backend/tests/e2e/__init__.py
touch lt-assistant/backend/tests/e2e/test_e2e.py
touch lt-assistant/backend/docs/api/auth.md
touch lt-assistant/backend/docs/api/crm.md
touch lt-assistant/backend/docs/api/project_management.md
touch lt-assistant/backend/docs/api/financial_management.md
touch lt-assistant/backend/docs/api/document_management.md
touch lt-assistant/backend/docs/user_guide/index.md
touch lt-assistant/backend/docs/sysadmin_guide/index.md
touch lt-assistant/backend/deployment/Dockerfile
touch lt-assistant/backend/deployment/docker-compose.yml
touch lt-assistant/backend/deployment/aws_deploy.sh
touch lt-assistant/backend/deployment/azure_deploy.sh
touch lt-assistant/backend/deployment/gcp_deploy.sh

# Create frontend files
touch lt-assistant/frontend/main.py
touch lt-assistant/frontend/requirements.txt
touch lt-assistant/frontend/themes/__init__.py
touch lt-assistant/frontend/themes/colors.py
touch lt-assistant/frontend/components/__init__.py
touch lt-assistant/frontend/components/dashboard.py
touch lt-assistant/frontend/components/crm.py
touch lt-assistant/frontend/components/project_management.py
touch lt-assistant/frontend/components/financial_management.py
touch lt-assistant/frontend/components/document_management.py
touch lt-assistant/frontend/components/additional_component_1.py
touch lt-assistant/frontend/components/additional_component_2.py
touch lt-assistant/frontend/tests/unit/__init__.py
touch lt-assistant/frontend/tests/unit/test_dashboard.py
touch lt-assistant/frontend/tests/unit/test_crm.py
touch lt-assistant/frontend/tests/unit/test_project_management.py
touch lt-assistant/frontend/tests/unit/test_financial_management.py
touch lt-assistant/frontend/tests/unit/test_document_management.py
touch lt-assistant/frontend/tests/unit/test_additional_component_1.py
touch lt-assistant/frontend/tests/unit/test_additional_component_2.py
touch lt-assistant/frontend/tests/integration/__init__.py
touch lt-assistant/frontend/tests/integration/test_integration.py
touch lt-assistant/frontend/tests/e2e/__init__.py
touch lt-assistant/frontend/tests/e2e/test_e2e.py

# Create root files
touch lt-assistant/.gitignore
touch lt-assistant/README.md

``` bash






### Docker Backend Deployment Docker file
``` dockerfile


## file path: /backend/deployment/Dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]

``` dockerfile

11 . **Docker Backend Deployment Docker Compose file**

``` docker-compose.yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=development
    volumes:
      - .:/app
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:

``` docker-compose.yaml


## 12. AWS Deployment Script

#!/bin/bash

# Build Docker image
docker build -t lt-assistant .

# Tag Docker image
docker tag lt-assistant:latest <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/lt-assistant:latest

# Push Docker image to AWS ECR
docker push <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/lt-assistant:latest

# Deploy to AWS ECS
ecs-cli compose --file docker-compose.yml up

## 13 Azure Deployment

#!/bin/bash

# Login to Azure
az login

# Create a resource group
az group create --name lt-assistant-rg --location <your-location>

# Create an Azure Container Registry
az acr create --resource-group lt-assistant-rg --name personalfinanceassistant --sku Basic

# Build and push Docker image to ACR
az acr build --registry personalfinanceassistant --image lt-assistant:latest .

# Create an Azure Container Instance
az container create --resource-group lt-assistant-rg --name lt-assistant --image personalfinanceassistant.azurecr.io/lt-assistant:latest --cpu 1 --memory 1 --registry-login-server personalfinanceassistant.azurecr.io --registry-username <your-acr-username> --registry-password <your-acr-password> --dns-name-label lt-assistant --ports 5000

## 14  Google Cloud Deployment

#!/bin/bash

# Authenticate with GCP
gcloud auth login

# Set project
gcloud config set project <your-project-id>

# Build Docker image
docker build -t gcr.io/<your-project-id>/lt-assistant:latest .

# Push Docker image to Google Container Registry
docker push gcr.io/<your-project-id>/lt-assistant:latest

# Deploy to Google Cloud Run
gcloud run deploy lt-assistant --image gcr.io/<your-project-id>/lt-assistant:latest --platform managed --region <your-region> --allow-unauthenticated




This detailed breakdown provides a clear, step-by-step guide for implementing the personal finance assistant application. Each step includes specific prompts to ensure that the implementation adheres to the specified requirements and themes.