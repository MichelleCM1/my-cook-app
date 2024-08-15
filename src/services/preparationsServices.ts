<<<<<<< HEAD
import { supabase } from "./supabase";

async function findByRecipeId(id: string){
    const { data } = await supabase
    .from("preparations")
    .select()
    .eq("recipe_id", id)
    .order("step")

    .returns<PreparationsResponse[]>()

    return data ?? []
=======
import { supabase } from './supabase'

async function findByRecipeId(id: string){
    const { data } = await supabase
        .from("preparations")
        .select()
        .eq("recipe_id", id)
        .order("step")
        .returns<PreparationsResponse[]>()

        return data ?? []
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7

}

export { findByRecipeId }