from modest import app, db



@app.route('/')
def hello_world():
  return 'Hello, World!'