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

import { relations } from 'drizzle-orm';

export const locationRelations = relations(locations, ({ many }) => ({
  restaurants: many(restaurants),
}));

export const mealsRelations = relations(locations, ({ many }) => ({
  mealsToRestaurants: many(mealsToRestaurants),
}));

export const cuisinesRelations = relations(cuisines, ({ many }) => ({
  cuisinesToRestaurants: many(cuisinesToRestaurants),
}));

export const restaurantsRelations = relations(restaurants, ({ one, many }) => ({
  location: one(locations, {
    fields: [restaurants.locationId],
    references: [locations.id],
  }),
  mealsToRestaurants: many(mealsToRestaurants),
  cuisinesToRestaurants: many(cuisinesToRestaurants),
}));

export const mealsToRestaurantsRelations = relations(
  mealsToRestaurants,
  ({ one }) => ({
    meals: one(meals, {
      fields: [mealsToRestaurants.mealId],
      references: [meals.id],
    }),
    restaurants: one(restaurants, {
      fields: [mealsToRestaurants.restaurantId],
      references: [restaurants.id],
    }),
  })
);

export const cuisinesToRestaurantsRelations = relations(
  cuisinesToRestaurants,
  ({ one }) => ({
    cuisines: one(cuisines, {
      fields: [cuisinesToRestaurants.cuisineId],
      references: [cuisines.id],
    }),
    restaurants: one(restaurants, {
      fields: [cuisinesToRestaurants.restaurantId],
      references: [restaurants.id],
    }),
  })
);
