from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/level<int:level>')
def level(level):
    if 1 <= level <= 5:
        return render_template(f'level{level}.html')
    return "Level not found", 404

if __name__ == '__main__':
    app.run(debug=True)
