import {z} from 'zod'
export const userSchema=z.object({
    body:z.object({
        username:z.string({required_error:"username is required.."}),
        password:z.string({required_error:"password is required"}),
        email:z.string({required_error:"email id required"}),
    })
})