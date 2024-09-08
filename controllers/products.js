const products = require("../data/products")

const list = (req, res)=>{
    res.json(products)
    
}


const show = (req, res)=>{
    // ^ ^ this is a path and what comes after the ":" is the params, and the comes the id
    //to something more specific of that params
    const productId = req.params.id
    const foundProduct = products.find((product) => {
        return product._id == productId
    })
    res.json(foundProduct)

}

const create = (req, res)=> {
    const productA = {
        _id:products.length +1,
        name:req.body.name,
        description:req.body.description,
        rating:req.body.rating,
        imgUrl:req.body.imgUrl,
        price:req.body.price,
        category:req.body.category,
        reviews:req.body.reviews,
        postId:1
    }
    products.push(productA)

    // this is optional to check that the post was done, check on the body tab inside of post man
    //to post the request and then get to see if it was posted
    res.send("Post request sent")
}

module.exports = {
    list,
    show,
    create
}

