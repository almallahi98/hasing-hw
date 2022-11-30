import { PrismaClient } from "@prisma/client";

const dbContext = new PrismaClient({
    log: ['query'],
    errorFormat: "pretty"
});
const connectDb = () => {

    try {
        console.log('connacted to db... ');
        dbContext.$connect();
    }
    catch (err) {
        console.log(err);
        process.exit(1);

    }
}
export { dbContext, connectDb };