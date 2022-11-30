import express from 'express';
import { addNewClasses, addNewTeacher, addStudent, getAllClasses, getAllClassesById, GetAllTeachers, getAllTeachersById, getClassRoomById, getStudentbyId } from '../controllers/school.controller';
import { classRoomSchema, studentSchema, TeacherSchema } from '../models/SchoolMangement.schema';
import { validate } from '../zod_middleware/validate';


const schoolRouter=express.Router();

schoolRouter.post("/addStudent",validate(studentSchema),addStudent);
schoolRouter.get('/getstudents/:id',getStudentbyId);
schoolRouter.get('/getcllclasses',getAllClasses);
schoolRouter.get('/getcllclasses/:id',getAllClassesById);
schoolRouter.post('/addnewclass',validate(classRoomSchema),addNewClasses);
schoolRouter.get('/getallteachers',GetAllTeachers);
schoolRouter.get('/getallteachers/:id',getAllTeachersById);
schoolRouter.post('/addnewteacher',validate(TeacherSchema),addNewTeacher);
//schoolRouter.get('/getTeacherById')
schoolRouter.get('/classroom/:id',getClassRoomById);



