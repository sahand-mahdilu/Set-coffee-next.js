import mongoose from "mongoose"


const connectedToDB = async ()=>{

    try{    
        if(mongoose.connections[0].readyState){
            return true
        }else{
            await mongoose.connect(process.env.MONGO_URL)
            console.log("connected to DB successfully");
            
        }



    }catch(err){

        console.log("connected to Db error->",err);
    }


}

export default connectedToDB