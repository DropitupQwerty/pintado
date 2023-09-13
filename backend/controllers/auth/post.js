const {db , auth } = require('../../firebase/AdminSdk');

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
        userType : "user"
      });
  
      res.status(200).json({ message: "User registered successfully", docId: firestoreResponse.id });
    } catch (error) {
      console.error('Error creating new user:', error);
      res.status(500).json({ error: "Registration failed" });
    }
  };






  module.exports = { RegisterUser  };