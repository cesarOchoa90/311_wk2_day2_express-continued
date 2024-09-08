const contacts = require("../data/contacts")

const list = (req, res)=>{
    res.json(contacts)

}

const show = (req, res)=>{
    // ^ ^ this is a path and what comes after the ":" is the params, and the comes the id
    //to something more specific of that params
    const contactId = req.params.id
    const foundContact = contacts.find((contact) => {
        return contact._id == contactId
    })
    res.json(foundContact)

}
const create = (req, res)=> {
    const contactA = {
        _id:contacts.length +1,
        name: req.body.name,
        occcupation: req.body.occupation,
        avatar: req.body.avatar,
        postId:1
    }
    contacts.push(contactA)

    // this is optional to check that the post was done, check on the body tab inside of post man
    //to post the request and then get to see if it was posted
    res.send("Post request sent")
}


module.exports = {
    list,
    show,
    create
}