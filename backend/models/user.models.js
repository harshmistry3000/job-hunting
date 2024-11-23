import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema(
    {
        fullname: {

            type: String,
            required: ture

        },

        email: {

            type: String,
            required: ture,

            unique: ture
        },

        phoneNumber: {

            type: Number,
            required: ture

        },

        password: {

            type: String,
            required: ture

        },

        role: {
            type: String,
            enum: ['student', 'recruiter'],
            required: ture
        },

        profile: {
            bio: { type: String },
            skills: [{ type: String }],
            resume: { type: String }, //  for URL to Resume file  
            resumeOriginalName: { type: String },
            company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
            profilePhoto: {
                type: String,
                default: ""
            }


        },




    }, { timestamps: ture }
);
export const User = mongoose.model('User', userSchema);