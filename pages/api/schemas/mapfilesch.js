import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema
var worldSchema = new Schema({ 
   id: {type:Number, required:true,},
title: {type:String, required:true,},
owner: {type:String, required:true,},
likes: {type:Number, required:true,},
map:{
    floormap:{type:Object, required:true,},
    interior:{type:Object, required:true,}
},
 })
export default model("world", worldSchema)