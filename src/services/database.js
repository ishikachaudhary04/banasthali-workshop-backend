import { eq } from "drizzle-orm";
import postgreDb from "../config/sqlclient.js";
import { usersTable } from "../model/index.js";

export default class {
    static async createUser(userData) {
        try {
            console.log('Creating user with data:', userData);
            const data = await postgreDb.insert(usersTable).values(userData).returning();
            console.log('User created with data:', data);
            if(data.length === 0){
                throw new Error('User creation failed');
            }
            return data[0];
        } catch (error) {
            throw new Error(error.message || 'Internal Server Error');
        }
    }

    static async getUserByEmail(email) {
        try {
            const data = await postgreDb.select().from(usersTable).where(eq(usersTable.email, email));
            if(data.length === 0){
                throw new Error('User not found');
            }
            return data[0];
        } catch (error) {
            throw new Error(error.message || 'Internal Server Error');
        }
    }
}