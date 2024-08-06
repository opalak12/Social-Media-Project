import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        password: {
            type: String,
            require: true,
            min: 5,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        }, 
        friends: {
            type: Array,
            default: []
        },
        picturePath: {
            type: String,
            default: ""
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number, 
    }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;
