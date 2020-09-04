from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/')
def index():
    result = requests.get('https://coronavirus-19-api.herokuapp.com/countries')
    countries = result.json()
    return render_template('index.html', countries=countries)
