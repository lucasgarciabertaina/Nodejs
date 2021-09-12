const { Router } = require('express');
const router = Router();

//Controllers
const { addMessage, getMessages } = require('./controller');

//Response
const { success, error } = require('../../network/response');

router.get('/', (req,res) =>{
    getMessages()
        .then((messageList) => {
            success(req, res, messageList, 200)            
        })
        .catch(e => {
            error(req, res, 'Unexpected error', 500, e)
        })

});

router.post('/', (req,res) =>{
    addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            success(req,res, fullMessage,201)
        })
        .catch(() => {
            error(req,res, 'Informacion invalida', 400,' Error en el contenido')
        })
});

module.exports = router;