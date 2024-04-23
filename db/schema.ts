import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const meals = pgTable('meals', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const cuisines = pgTable('cuisines', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const restaurants = pgTable('restaurants', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  locationId: integer('location_id')
    .notNull()
    .references(() => locations.id),
});

export const mealsToRestaurants = pgTable('mealsToRestaurants', {
  mealId: integer('cuisine_id')
    .notNull()
    .references(() => meals.id),
  restaurantId: integer('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
});

export const cuisinesToRestaurants = pgTable('cuisinesToRestaurants', {
  cuisineId: integer('cuisine_id')
    .notNull()
    .references(() => cuisines.id),
  restaurantId: integer('restaurant_id')
    .notNull()
    .references(() => restaurants.id),
});

export type Cuisines = typeof cuisines.$inferSelect;
export type NewCuisines = typeof cuisines.$inferInsert;
