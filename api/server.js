// Initialize express ap
import    express from "express";
import { find ,findById, remove, update} from "./users/model.js";

// GET ALL USERS

const app = express()
app.use(express.json())// GET USER BY ID

app.get("/users" , async (req,res)=> {
     const alluser  = await find()
     res.status(200).json({mssege : alluser})
})

app.get("/user/:id" , async(req,res)=> {
    const Oneuser =  await findById(req.params.id)
    res.status(200).json({mssege : Oneuser})
})

app.post("/user/create_user" , async(req,res) => {
    const newuser =  req.body
    if(newuser){
        res.status(200).json({mssege : "created a new user"})

    }else {
        res.status(400).json({ status: 400, message: "User was not created!" })
    }
  
})


app.delete("/user/move/:id"  ,async (req,res) => {
    const updateduser =   await  update(req.params.id , req.body)
    if(updateduser) {
        res.status(200).json({mssege : "created a updted user"})
    }else {
        res.status(400).json({ status: 400, message: "User no udated!" })
    }
})

app.delete("/user/:id"  ,async (req,res) => {

    const delted =   await  remove(req.params.id)
    if(delted) {
        res.status(200).json({mssege : "created a delted user"})
    }else {
        res.status(400).json({ status: 400, message: "no remove" })
    }
})
// CREATE A NEW USER

// UPDATE A USER

// DELETE A USER

// export default app
export default app;
