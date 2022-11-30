import { classroom, student, teacher } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { dbContext } from "../dbContext/DBContext";

export const getStudent = async (res: Response, req: Request, next: NextFunction) => {
    try {
        const studentList = await dbContext.student.findMany();
        res.status(200).json(studentList);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: err })

    }
}

export const addStudent = async (res: Response, req: Request) => {
    try {
        const newstudent = req.body as student;
        await dbContext.student.create({ data: newstudent });
        return res.status(201).json({ msg: "student is add.." });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ msg: err })

    }
}

export const getStudentbyId = async (res: Response, req: Request) => {
    try {
        const { id } = req.params
        const studentList = await dbContext.student.findMany({ where: { id } });
        res.status(200).json(studentList);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ msg: err })

    }
}

export const getAllClasses = async (res: Response, req: Request) => {
    try {
        const classes = await dbContext.classroom.findMany();
        return res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "classes is not found.." });

    }
}

export const getAllClassesById = async (res: Response, req: Request) => {
    try {
        const { id } = req.params;
        const classes = await dbContext.classroom.findMany({ where: { id } });
        return res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "classes is not found.." });

    }
}
export const addNewClasses = async (res: Response, req: Request) => {
    try {
        const newclass = req.body as classroom;
        await dbContext.classroom.create({ data: newclass });
        return res.status(201).json({ msg: "class room is added" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "class room cant be added" });

    }
}

export const GetAllTeachers = async (res: Response, req: Request) => {
    try {
        const Teachers = await dbContext.classroom.findMany();
        return res.status(200).json(Teachers);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Teachers is not found.." });
    }
}

export const getAllTeachersById = async (res: Response, req: Request) => {
    try {
        const { id } = req.params;
        const Teachers = await dbContext.teacher.findMany({ where: { id } });
        return res.status(200).json(Teachers);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Teachers is not found.." });

    }
}

export const addNewTeacher = async (res: Response, req: Request) => {
    try {
        const Teacher = req.body as teacher;
        await dbContext.teacher.create({ data: Teacher });
        return res.status(201).json({ msg: "teacher is added" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "teacher cant be added" });

    }
}

export const getStudentById = async (res: Response, req: Request) => {
    try {
        const { id } = req.params;
        const Student = await dbContext.student.findUnique({ where: { id } });
        return res.status(200).json(Student);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Student is not found.." });

    }
}

export const getTeacherById = async (res: Response, req: Request) => {
    try {
        const { id } = req.params;
        const Teacher = await dbContext.teacher.findUnique({ where: { id } });
        return res.status(200).json(Teacher);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Teacher is not found.." });

    }
}
export const getClassRoomById = async (res: Response, req: Request) => {
    try {
        const { id } = req.params;
        const ClassRoom = await dbContext.classroom.findUnique({ where: { id } });
        return res.status(200).json(ClassRoom);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "ClassRoom is not found.." });

    }
}