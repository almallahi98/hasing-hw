import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { string } from 'zod';


interface aothObject{
    id:string,
    role:string
}
export const protaction=(req:Request,res:Response,next:NextFunction)=>{
    try{
        const header=req.headers.authorization;
        if(!header){
            return res.status(401).json({msg:"not authorize"})
        }
        const token =header.split(' ')[1];
        const userOk=jwt.verify(token,process.env.SECRET_KEY as string);
        res.locals.user=userOk;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({msg:'you are not authorize'});
    }
}

export const authorization=(role:['Admin','User'])=>(req:Request,res:Response,next:NextFunction)=>{
    const user= res.locals.user as aothObject;
    if(role[0]==user.role){
        return res.status(403).json({msg:"you are not authorized"});
    }
    next();
}

