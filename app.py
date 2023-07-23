from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/our_services')
def our_services():
    return render_template("our_services.html")


@app.route('/notices')
def noticeboard():
    return render_template("notices.html")


@app.route('/contact')
def contact():
    return render_template("contact.html")


@app.route('/login')
def login():
    return render_template("log_in.html")
