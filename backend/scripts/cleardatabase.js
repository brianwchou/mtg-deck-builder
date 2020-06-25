// use this with the mongo shell
// mongo filename

const conn = new Mongo("mongodb://localhost/test");
db = conn.getDB('');

console.log(db);


