import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("moongose connected")
    }catch (error){
        console.error("error connecting db",error)
        process.exit(1)
    }
}