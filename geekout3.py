import json
from bottle import route, run, get, post, HTTPResponse
import bottle as b
list1 = ["bob", "olivia", "ilan", "jean-claude"]


@route('/')
def index():
    return b.template("geekout3.html")


@get('/js/<filename:re:.*\.js>')
def javascript(filename):
    return b.static_file(filename, root='js')


@get('/css/<filename:re:.*\.css>')
def javascript(filename):
    return b.static_file(filename, root='css')


@get('/api/getUsers')
def users():
    list1.sort()
    return HTTPResponse({json.dumps(list1)}, 200)


@post('/api/addUsers')
def users():
    userName = b.request.POST.get('msg')
    if userName in list1:
        text = "the user already exist"
        return HTTPResponse({json.dumps(text)}, 404)
    else:
        list1.append(userName)
        text = "user add"
        return HTTPResponse({json.dumps(text)}, 201)


@post('/api/delUsers')
def users():
    delUserName = b.request.POST.get('msg')
    if delUserName in list1:
        number = list1.index(delUserName)
        list1.pop(number)
        text = "user deleted"
        return HTTPResponse({json.dumps(text)}, 201)
    else:
        text = "nothing to delete, the user does not exist"
        return HTTPResponse({json.dumps(text)}, 404)


def main():
    run(host="localhost", port=7000)


if __name__ == "__main__":
    main()