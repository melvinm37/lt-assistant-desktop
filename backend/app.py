from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['lt-assistant']

# Authentication & Authorization
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = generate_password_hash(data['password'], method='sha256')
    db.users.insert_one({
        "email": data['email'],
        "password": hashed_password,
        "role": "user",
        "license_key": "",
        "api_keys": [],
        "created_at": datetime.datetime.utcnow(),
        "updated_at": datetime.datetime.utcnow()
    })
    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = db.users.find_one({"email": data['email']})
    if user and check_password_hash(user['password'], data['password']):
        access_token = create_access_token(identity={'email': user['email'], 'role': user['role']})
        return jsonify(access_token=access_token), 200
    return jsonify({"message": "Invalid credentials"}), 401

# CRM Module
@app.route('/contacts', methods=['POST'])
@jwt_required()
def add_contact():
    data = request.json
    db.contacts.insert_one({
        "type": data['type'],
        "name": data['name'],
        "email": data['email'],
        "phone": data['phone'],
        "status": data['status'],
        "vector_embedding": data.get('vector_embedding', []),
        "created_at": datetime.datetime.utcnow(),
        "updated_at": datetime.datetime.utcnow()
    })
    return jsonify({"message": "Contact added successfully!"}), 201

# Project Management Module
@app.route('/projects', methods=['POST'])
@jwt_required()
def add_project():
    data = request.json
    db.projects.insert_one({
        "customer_id": data['customer_id'],
        "name": data['name'],
        "status": data['status'],
        "start_date": data['start_date'],
        "end_date": data['end_date'],
        "tasks": data.get('tasks', []),
        "created_at": datetime.datetime.utcnow(),
        "updated_at": datetime.datetime.utcnow()
    })
    return jsonify({"message": "Project added successfully!"}), 201

# Financial Management Module
@app.route('/transactions', methods=['POST'])
@jwt_required()
def add_transaction():
    data = request.json
    db.transactions.insert_one({
        "journal_type": data['journal_type'],
        "date": data['date'],
        "debit_account": data['debit_account'],
        "credit_account": data['credit_account'],
        "amount": data['amount'],
        "reference_type": data['reference_type'],
        "reference_id": data['reference_id'],
        "vector_embedding": data.get('vector_embedding', []),
        "proof_document": data['proof_document'],
        "created_at": datetime.datetime.utcnow(),
        "updated_at": datetime.datetime.utcnow()
    })
    return jsonify({"message": "Transaction added successfully!"}), 201

# Document Management Module
@app.route('/documents', methods=['POST'])
@jwt_required()
def add_document():
    data = request.json
    db.lt_documents.insert_one({
        "name": data['name'],
        "type": data['type'],
        "path": data['path'],
        "reference_type": data['reference_type'],
        "reference_id": data['reference_id'],
        "version": data['version'],
        "created_at": datetime.datetime.utcnow(),
        "updated_at": datetime.datetime.utcnow()
    })
    return jsonify({"message": "Document added successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)