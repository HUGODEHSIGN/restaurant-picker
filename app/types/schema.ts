import {
  cuisines,
  cuisinesToRestaurants,
  locations,
  meals,
  mealsToRestaurants,
  restaurants,
} from 'db/schema';

export type Locations = typeof locations.$inferSelect;
export type NewLocations = typeof locations.$inferInsert;

export type Meals = typeof meals.$inferSelect;
export type NewMeals = typeof meals.$inferSelect;

export type Cuisines = typeof cuisines.$inferSelect;
export type NewCuisines = typeof cuisines.$inferInsert;

export type Restaurants = typeof restaurants.$inferSelect;
export type NewRestaurants = typeof restaurants.$inferInsert;

export type MealsToRestaurants = typeof mealsToRestaurants.$inferSelect;
export type NewMealsToRestaurants = typeof mealsToRestaurants.$inferInsert;

export type CuisinesToRestaurants = typeof cuisinesToRestaurants.$inferSelect;
export type NewCuisinesToRestaurants =
  typeof cuisinesToRestaurants.$inferInsert;
