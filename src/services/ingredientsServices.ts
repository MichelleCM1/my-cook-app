import { supabase } from "./supabase";

async function findAll() {
    const { data } = await supabase
        .from("ingredients")
        .select()
        .order("name")
        .returns<IngredientResponse[]>()

    return data ?? [];
}

async function findByIds(ids: string[]){
    const { data } = await supabase
<<<<<<< HEAD
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientResponse[]>()

    return data??[]
=======
        .from("ingredients")
        .select()
        .in("id", ids)
        .order("name")
        .returns<IngredientResponse[]>()
    
    return data ?? []
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7
}

async function findByRecipeId(id: string){
    console.log(id)
    const { data, error } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ingredients:IngredientResponse}[]>()
    console.log(data)
    return data ? data.map((item) => item.ingredients):[]
}

export { findAll, findByIds, findByRecipeId }