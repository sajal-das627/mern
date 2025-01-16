const mongoose = require("mongoose")
function connects(){
    mongoose.connect("mongodb://localhost:27017/test8")
    .then(()=>{
        console.log("DB connected")

    }).catch((error)=>{
        console.log(error)
    })

}

module.exports = connects