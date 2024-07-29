const express=require("express")
const mongoose=require("mongoose")
const multer=require("multer")
const path=require("path")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))





//Way-1

// mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
// .then(()=>console.log("DB is connected"))
// .catch((err)=>{
//     console.log(err)
//     console.log("DB is not connected")
// })


//Way-2

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/task1")
        console.log("DB is connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error)
    }
}





// Create schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    // file:{
    //     type:String,
    //     required:true
    // },
    division:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    }
})

//Create Model
const productModel=mongoose.model("student",productSchema)


app.get("/post",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})


//store data
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        const name=Date.now()+"-"+file.originalname;
        cb(null,name)
    }
})
const upload=multer({storage:storage})


app.post("/post",upload.single("image"),async(req,res)=>{
try {
    const newData=new productModel({
    name:req.body.name,
    email:req.body.email,
    roll:req.body.roll,
    phone:req.body.phone,
    // file:req.file.filename,
    division:req.body.division,
    district:req.body.district
})
    const productData=await newData.save()
    res.status(200).send({message:"Data is submitted",data:productData})
    
} catch (error) {
    res.status(500).send({message:error.message})
}
})















const PORT=3005
app.listen(PORT,async()=>{
    console.log(`Server is running on the port number ${PORT}`)
    await connectDB()
})