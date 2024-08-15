<<<<<<< HEAD
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Recipe } from '@/components/Recipe';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { Ingredients } from '@/components/ingredients';

export default function Recipes() {
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    //console.log(params);
    const ingredientesIds = params.ingredientsIds ? params.ingredientsIds.split(',') : [];


    //listar os ingredientes selecionados na tela anterior
    useEffect(() => {
        services.ingredients.findByIds(ingredientesIds).then(setIngredients)
    }, [])


    // Receitas
    useEffect(() => {
        services.recipes.findBIngredientsIds(ingredientesIds).then(setRecipes)
        console.log(recipes)
    }, [])


=======
import { View, Text, FlatList } from "react-native"
import { styles } from './styles';
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/ingredients";

export default function Recipes(){
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    // loading?: boolean | { delay?: number };

    
    const params = useLocalSearchParams<{ingredientsIds: string}>() 

    const ingredientesIds = params.ingredientsIds ? params.ingredientsIds.split(",") : [];
    
    // lista os ingredientes selecionados na tela anterior
    useEffect( () => {
        services.ingredients.findByIds(ingredientesIds).then(setIngredients)
    },[])

    // Receitas
    useEffect( () => {
        services.recipes.findByIngredientsIds(ingredientesIds).then(setRecipes)
        console.log(recipes)
    },[])
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="arrow-back"
                    size={32}
<<<<<<< HEAD
                    onPress={() => router.back()}
=======
                    onPress={ () => router.back()}
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7
                />
            </View>
            <Text style={styles.title}>Ingredientes</Text>

            <Ingredients ingredients={ingredients} />

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
<<<<<<< HEAD
                renderItem={({ item }) => (
                    <Recipe recipe={item}
                        onPress={() => router.navigate("/recipe/" + item.id)}
=======
                renderItem={ ({item}) => (
                    <Recipe recipe={item}
                        onPress={ () => router.navigate("/recipe/" + item.id)}
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7
                    />
                )}
                style={styles.recipes}
                contentContainerStyle={styles.recipesContent}
                showsVerticalScrollIndicator={false}
<<<<<<< HEAD
                columnWrapperStyle={{gap: 16}}
                numColumns={2}
            />
=======
                columnWrapperStyle={{gap:16}}
                numColumns={2}

            />    
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7
        </View>
    )
}