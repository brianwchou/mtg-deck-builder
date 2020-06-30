let db = connect('localhost:27017/test')

db.names.insert({'name': 'Don Draper'});
db.names.insert({'name': 'second name'});
db.names.insert({'name': 'another name'});