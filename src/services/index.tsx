import * as ingredients from './ingredientsServices'
import * as recipes from "./recipeService"
import * as preparations from "./preparationsServices"

export const services = {
    ingredients,
    recipes,
    preparations,


    storage:{
        imagePath: "https://jyhjqvpvbmyafzaleuwx.supabase.co/storage/v1/object/public/ingredients"
    }
}