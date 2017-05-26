var express = require('express');
var router = express.Router();

router.get('/createChatRoom', (req, res, next) => {
    req.query.live_room_id;

    req.body.chat_room_id;
    req.body.chat_room_name;
    req.body.chat_room_limit_num;
    req.body.toll_type;
    req.body.toll_num;

    res.write("hello ");
    res.end();

    req.app.set('ss', "ss");
});

router.get('/intoChatRoom', (req, res, next) => {
    req.body.chat_room_id;
    req.body.nickname;
    req.body.user_id;
    req.body.user_level;
    req.body.small_avatar;

    var t = req.app.get('ss');

});

router.post('/exitChatRoom', (req, res, next) => {
    req.body.chat_room_id;
    req.body.user_id;
    req.body.nickname;
});

module.exports = router;