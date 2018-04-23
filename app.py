from flask import Flask, render_template, request, session, redirect, url_for, flash
import os, csv

app = Flask(__name__)
app.secret_key = os.urandom(64)



@app.route('/')
def root():
    return render_template('home.html')

# @app.route('/data/table2.csv')
# def method():
#     to_pass = []
#     with open ('static/table2.csv', 'rb') as csvfile:
#         activity_reader = csv.DictReader(csvfile)
#         for row in activity_reader:
#             return row
#             to_pass.append(row)
#     return to_pass.to_csv()


if __name__ == '__main__':
	# app.debug = True
	app.run()        #runs the app
