const express = require('express');
const { commentPostReq } = require('../controllers/comment-controller');
const router = express.Router();

router.post('/postComment', commentPostReq);

module.exports = router