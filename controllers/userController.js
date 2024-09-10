const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, age, description, mobileNumber } = req.body;

  try {
    const newUser = new User({ name, email, age, description, mobileNumber });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.getUser = async(req , res)=>{
try {
  const user = await User.find();
  if(!user){
    res.status(404).json({message:"user not found"})
    
  }
  res.status(200).json({ message: 'User created successfully', user });

} catch (error) {
  res.status(500).json({ message: 'Error creating user', error: error.message }); 
}
}

exports.updateUser = async(req , res)=>{
  const { name, email, age, description, mobileNumber } = req.body;
  try {
    const update = await User.findByIdAndUpdate(req.params.id,{
      name, email, age, description, mobileNumber
    },{new:true})
 if(!update){
  res.status(404).json({message:"user update not found"})
 }
 res.status(200).json({message:"user update successfully" ,update})
  } catch (error) {
    res.status(500).json({message:"Error update user" , error:error.message})
  }
}
exports.deleteUser = async(req , res)=>{
  try {
    const deleteuser = await User.findByIdAndDelete(req.params.id);
    if(!deleteuser){
      res.status(404).json({message:"delete user not found"})
    }
    res.status(200).json({message:"user delete successfully"})
  } catch (error) {
    res.status(500).json({message:"Error delete user" , error:error.message})
    
  }
}

