import { sql } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar('name',{ length: 255 }).notNull(),
  email: varchar('email',{ length: 255 }).notNull().unique(),
  password: varchar('password',{ length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().$onUpdate(()=>sql`CURRENT_TIMESTAMP`)
});
