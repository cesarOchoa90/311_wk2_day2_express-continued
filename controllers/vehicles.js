const vehicles = require("../data/vehicles")

const list = (req, res)=>{
    res.json(vehicles)
    
}

const show = (req, res)=>{
    // ^ ^ this is a path and what comes after the ":" is the params, and the comes the id
    //to something more specific of that params
    const vehicleId = req.params.id
    const foundVehicle = vehicles.find((vehicle) => {
        return vehicle._id == vehicleId
    })
    res.json(foundVehicle)

}

const create = (req, res)=> {
    const vehicleA = {
        _id:vehicles.length +1,
        imgUrl: req.body.imgUrl,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price:req.body.price,
        km:req.body.km,
        miles:req.body.miles,
        fuel:req.body.fuel,
        city:req.body.city,
        isNew: req.body.isNew,
        postId:1
    }
    vehicles.push(vehicleA)

    // this is optional to check that the post was done, check on the body tab inside of post man
    //to post the request and then get to see if it was posted
    res.send("Post request sent")
}

module.exports = {
    list,
    show,
    create
}