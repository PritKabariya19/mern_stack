const express = require('express');
const router = express.Router();

const User = require('../models/user'); // check folder spelling

// READ all users
router.get('/users', async (req, res) => {
  
    try {
        const users = await User.find(); // fetch all users
    
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
});

// CREATE new user
router.post('/users', async (req, res) => {
    try {
        const { name, age, weight } = req.body; // get data from body
        const nuser = new User({ name, age, weight }); // new user
        await nuser.save(); // save to DB

        res.status(200).json({
            message: "User created successfully",
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
});

router.put('/users/:id',async(req,res)=>{

    const {id}=req.params;//id ley url mathi
    const {name,age,weight}=req.body;
    try{
        //findOneAndUpdate aa function id goti  ne update kre
        const updateduser = await User.findOneAndUpdate(
            { _id: id }, // 👈 must be an object
            { name, age, weight },
            { new: true, runValidators: true }
            );
                
        if(!updateduser){
            res.json({
                message:"plese fill the new  data",
                success:false
                
            })
        }
        // if user send valid data
        res.status(200).json({
            message:"updated successfully",
            success:true,
            user:updateduser
        }) 


    }catch(error){
         res.status(500).json({
            message: error.message,
            success: false
        });
    }
})

// delete operation
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    res.status(200).json({
      message: "Deleted operation success",
      success: true,
      user: deletedUser
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
});

module.exports = router;
