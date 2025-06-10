const express=require("express");
const app=express();
const {Contact,Counselling}=require("./model");

app.use(express.json());

const cors=require("cors");

app.use(cors());

app.post("/contact",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    const message=req.body.message;

    await Contact.create({
        name:name,
        email:email,
        number:number,
        message:message
    })

    res.status(400).json({
        msg:"Contact Details added successfully",success:true
    })
})

app.post("/counselling",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    const presess=req.body.presess;
    const predate=req.body.predate;
    const pretime=req.body.pretime;
    const message=req.body.message;

    await Counselling.create({
        name:name,
        email:email,
        number:number,
        Sessiontype:presess,
        Sessiondate:predate,
        Sessiontime:pretime,
        message:message
    })

    res.status(400).json({
        msg:"Counselling Details added successfully",success:true
    })
})


app.listen(8000);