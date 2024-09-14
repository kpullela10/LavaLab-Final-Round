from flask import Flask, jsonify, send_from_directory # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

# hardcoded user info for now
user_info = {
    "name": "Cole Gawin",
    "email": "colegawin@gmail.com"
}

# hardcoded project data for now
projects = [
    {"title": "Assignment 1", "timestamp": "1 min ago"},
    {"title": "Lab 3", "timestamp": "40m ago"},
    {"title": "Workbook Ch. 3", "timestamp": "2 hrs ago"},
    {"title": "Worksheet 2", "timestamp": "Apr 25, 2024"},
    {"title": "Resume", "timestamp": "March 27, 2023"},
    {"title": "Assignment 3", "timestamp": "Feb 20, 2023"}
]

@app.route('/api/user', methods=['GET'])
def get_user():
    return jsonify(user_info)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

@app.route('/user_assets/<path:filename>')
def serve_user_assets(filename):
    return send_from_directory('user_assets', filename)

if __name__ == '__main__':
    app.run(debug=True)