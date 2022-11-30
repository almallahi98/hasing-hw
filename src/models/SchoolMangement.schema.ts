import {z} from 'zod';

export const studentSchema=z.object({
    body:z.object({
        username:z.string({required_error:"username is requierd"}).min(3,"min musername lenght is 3").max(10,"max lenght is 10"),
        password:z.string({required_error:"password id requierd"}).min(6,"min lenght is 6"),
        email:z.string({required_error:"user name is requierd"})
    })
})

export const classRoomSchema=z.object({
    body:z.object({
        class_name:z.string(),
        student_id:z.string(),
        teacher_id:z.string()
    })
})

export const TeacherSchema=z.object({
    body:z.object({
        name:z.string({required_error:"name is required"})
    })
})