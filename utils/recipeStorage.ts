import AsyncStorage from '@react-native-async-storage/async-storage';
import { TRecipe } from './types';

const STORAGE_KEY = '@my-recipes:recipes';

export const saveRecipe = async (recipes: TRecipe[]): Promise<void> => {
    try {
        const recipesString = JSON.stringify(recipes);
        await AsyncStorage.setItem(STORAGE_KEY, recipesString);
        console.log('Recipes saved');
    } catch (error) {
        console.log('Error saving recipes', error);
    }
};

export const loadRecipes = async (): Promise<TRecipe[]> => {
    try {
        const recipesString = await AsyncStorage.getItem(STORAGE_KEY);
        return recipesString ? JSON.parse(recipesString) : [];
    } catch (error) {
        console.log('Error loading recipes', error);
        return [];
    }
}

export const addRecipe = async (recipe: TRecipe): Promise<void> => {
    const recipes = await loadRecipes();
    recipes.push(recipe);
    await saveRecipe(recipes);
}

export const removeRecipe = async (id: string): Promise<void> => {
    const recipes = await loadRecipes();
    const newRecipes = recipes.filter(recipe => recipe.id !== id);
    await saveRecipe(newRecipes);
}

export const updateRecipe = async (recipe: TRecipe): Promise<void> => {
    const recipes = await loadRecipes();
    const index = recipes.findIndex(r => r.id === recipe.id);
    recipes[index] = recipe;
    await saveRecipe(recipes);
}

export const clearRecipes = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear recipes:', error);
    }
};