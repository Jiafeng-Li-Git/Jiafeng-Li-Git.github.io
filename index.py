from flask import *


app = Flask(__name__)

name = ''
login = ''
@app.route('/<int:id>', methods=['GET', 'POST'])
@app.route('/', methods=('GET', 'POST'))
def index(id=None):
    global name, login
    if request.method == 'POST':
        login = 'success'
        name = 'admin'
        return render_template('index.html', name=name, login=login)
    return render_template('index2.html')


if __name__ == '__main__':
    app.run()