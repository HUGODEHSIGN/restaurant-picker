import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const cuisines = pgTable('cuisines', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
});

export type Cuisine = typeof cuisines.$inferSelect;
export type NewCuisine = typeof cuisines.$inferInsert;
