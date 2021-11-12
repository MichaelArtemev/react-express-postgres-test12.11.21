const Router = require('express');
const router = new Router();
const RenderController = require('../controller/render.controller');

router.get('/list', RenderController.getUsers);
router.post('/list', RenderController.createUser);
router.get('/list/:id', RenderController.getOneUser);
router.put('/list', RenderController.updateUser);
router.delete('/list/:id', RenderController.deleteUser);


module.exports = router;