const db = require('mongodb');
db.ConnectionReadyEvent('mongodb+srv: 20421846619Lg:20421846619Lg@nodejsplatzi.repap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


function addMessage(message){
    list.push(message);
};

function getMessage(){
    return list;
};

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}