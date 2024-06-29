import mongoose from "mongoose";

const connect = async () => {
  try {
    const PASSWORD = process.env.DB_PW || "minh18022003"; 
    const CLOUD_DB_COMPASS = `mongodb+srv://hotuanminh1802:${PASSWORD}@cluster0.tgbwv0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0  
`;
    await mongoose.connect(CLOUD_DB_COMPASS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successful !");
  } catch (err) {
    console.log("Connect failed !");
  }
};

export default connect;