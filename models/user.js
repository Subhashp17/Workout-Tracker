import mongoose, {Schema, model, models} from 'mongoose';


const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required : [true, 'Email is required!'],
    },
    username:{
        type : String,
        required:[true, 'Username is required!'],
        
    },
    image:{
        type: String,
    },
    friends:[{
        type: mongoose.Schema.ObjectId,
        ref: "User"

    }],
    height:{
        type: Number,

    },
    weight : {
        type : Number,

    }

  
    }
);



const User =  models.User || model("User", UserSchema);

export default User;