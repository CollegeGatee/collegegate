const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://collegeegatee:WdlokQ4w50uYnqOD@cluster0.ymda94e.mongodb.net/Collegegate");

const contact=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },number:{
        type:Number,
        required:true
    },message:{
        type:String,
        required:true
    }
})

const counselling=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    Sessiontype:{
        type:String,
        required:true
    },
    Sessiondate:{
        type:String,
        required:true
    },
    Sessiontime:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contact=new mongoose.model("Contact",contact);
const Counselling=new mongoose.model("Counselling",counselling);


module.exports={Contact,Counselling};