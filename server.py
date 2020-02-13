from flask import Flask, Response

app = Flask("Server pro Github fds")

@app.route('/')
def home():
    with open('index1.html','r') as f:
        lines = f.read()
        f.close()
    return lines

if __name__ == "__main__":
    app.run()