import { user } from "@prisma/client";
import { Request, Response } from "express";
import { dbContext } from "../dbContext/DBContext";
import argon2 from 'argon2'
import * as jwt from 'jsonwebtoken';
import { sign } from "crypto";
export const getAllUsers=async(req:Request,res:Response)=>{
    try{
        const List =await dbContext.user.findMany();
        return res.status(200).json(List);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:err});
        
    }
}
export const Register=async(req:Request,res:Response)=>{
    try{
        const newUser= req.body as user;
        newUser.password= await argon2.hash(newUser.password);
        console.log(newUser);
        
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

export const Login=async(req:Request,res:Response)=>{
    try{
        
    const user =req.body as user;
    //console.log(user);
    
    const UserData= await dbContext.user.findFirst(
        {where:{
            email:user.email
        }}
    );
    console.log(UserData);
    
    const userOk=await argon2.verify(UserData!.password,user.password);
    if(userOk){
        const token={
            id:UserData?.id,
            email:UserData?.username,
            username:UserData?.username,
        }
        const x=jwt.sign(token,process.env.SECRET_KEY as string)
        
        return res.status(200).json(jwt.sign(token,process.env.SECRET_KEY as string));
    }
    return res.status(400).json(userOk);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err});
    }
    
}
