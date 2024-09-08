const comments = require("../data/comments")

const list = (req, res)=>{
    res.json(comments)
    
}
const show = (req, res)=>{
    // ^ ^ this is a path and what comes after the ":" is the params, and the comes the id
    //to something more specific of that params
    const commentId = req.params.id
    const foundComment = comments.find((comment) => {
        return comment._id == commentId
    })
    res.json(foundComment)

}

const create = (req, res)=> {
    const commentA = {
        _id:comments.length +1,
        body: req.body.body,
        postId:1
    }
    comments.push(commentA)

    // this is optional to check that the post was done, check on the body tab inside of post man
    //to post the request and then get to see if it was posted
    res.send("Post request sent")
}

module.exports = {
    list,
    show,
    create
}