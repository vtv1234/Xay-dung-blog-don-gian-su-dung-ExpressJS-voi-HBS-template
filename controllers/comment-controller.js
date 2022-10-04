const {postList} = require("../models/post-list");

function commentPostReq(req, resp){
    const comment = req.body['comment'];
    const postID = Number(req.body['postID']);
    var post = postList.find(obj => {
        return obj.id == postID;
    });
    post['comment'].push(comment);
    resp.redirect(`/post/${postID}`);
}

module.exports = {
    commentPostReq
}