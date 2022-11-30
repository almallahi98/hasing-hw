import express from 'express';
import { addNewClasses, addNewTeacher, addStudent, getAllClasses, getAllClassesById, GetAllTeachers, getAllTeachersById, getClassRoomById, getStudentbyId } from '../controllers/school.controller';
import { classRoomSchema, studentSchema, TeacherSchema } from '../models/SchoolMangement.schema';
import { validate } from '../zod_middleware/validate';


const schoolRouter=express.Router();

schoolRouter.post("/addStudent",validate(studentSchema),addStudent);
schoolRouter.get('/getstudents/:id',getStudentbyId);
schoolRouter.get('/getallclasses',getAllClasses);
schoolRouter.get('/getallclasses/:id',getAllClassesById);
schoolRouter.post('/addnewclass',validate(classRoomSchema),addNewClasses);
schoolRouter.get('/getallteachers',GetAllTeachers);
schoolRouter.get('/getallteachers/:id',getAllTeachersById);
schoolRouter.post('/addnewteacher',validate(TeacherSchema),addNewTeacher);
schoolRouter.get('/classroom/:id',getClassRoomById);

export default schoolRouter;




