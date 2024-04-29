import {
  cuisines,
  cuisinesToRestaurants,
  locations,
  meals,
  mealsToRestaurants,
  restaurants,
} from 'db/schema';
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
  location: one(locations),
  mealsToRestaurants: many(mealsToRestaurants),
  cuisinesToRestaurants: many(mealsToRestaurants),
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
