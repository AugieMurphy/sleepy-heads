from flask import Flask, render_template, request, session, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(64)


@app.route('/')
def root():
    return render_template('home.html')

@app.route('/data/table2.csv')
def method():
    return render_template('home.html')


if __name__ == '__main__':
	app.debug = True
	app.run()        #runs the app
