import { user } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { dbContext } from "../dbContext/DBContext";
import argon2 from 'argon2'
export const getAllUsers=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:err});
        
    }
}
export const Register=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const newUser= req.body as user;
        newUser.password= await argon2.hash(newUser.password);
        const IsValid= await dbContext.user.create({data:newUser});
        if(IsValid){
            return res.status(201).json({msg:"new user add.."})
        }
        return res.status(500).json({msg:"email is used"})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err})        
    }
}

export const Login=async(res:Response,req:Request)=>{
    try{
    const user =req.body as user;
    const UserData= await dbContext.user.findUnique({where:{email:user.email}});
    const userOk=await argon2.verify(UserData!.password,user.password);
    if(userOk){
        return res.status(200).json({msg:"user is sgined in"});
    }
    return res.status(400).json({msg:"email or password is not correct"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err});
    }
    
}