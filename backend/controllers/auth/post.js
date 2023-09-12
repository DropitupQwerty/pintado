const { auth } = require('firebase-admin')
const db = require('../../firebase/AdminSdk')
const {clientAuth} = require('../../firebase/Client')


const RegisterUser = async (req, res) => {
    const data = req.body;
  
    try {
      const userRecord = await auth().createUser({
        email: data.email,
        emailVerified: false,
        password: data.password,
        disabled: false,
      });
  
      const firestoreResponse = await db.collection("Users").add({
        uid: userRecord.uid,
        email: userRecord.email,
      });
  
      res.status(200).json({ message: "User registered successfully", docId: firestoreResponse.id });
    } catch (error) {
      console.error('Error creating new user:', error);
      res.status(500).json({ error: "Registration failed" });
    }
  };


  const LoginUser = async (req,res) => { 
    try {
        clientAuth().
    } catch (error) {
        
    }
  }
  
  module.exports = { RegisterUser };