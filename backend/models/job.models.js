import { application } from "express";
import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: ture
    },

    description: {
        type: String,
        required: ture
    },

    requirements: [{
        type: String
    }],

    salary: {
        type: Number,
        required: ture
    },

    location: {
        type: String,
        required: ture
    },

    jobType: {
        type: String,
        required: ture
    },

    position: {
        type: String,
        required: ture
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: ture
    },

    created_by: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: ture
    },

    applications: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application',

    }]

},{timestamps:true});
 
export const Job = mongoose.model("Job", jobSchema);