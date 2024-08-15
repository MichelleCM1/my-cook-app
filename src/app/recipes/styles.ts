import { StyleSheet } from "react-native";
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    }, 
    header:{
        paddingHorizontal:32,
        paddingTop:62,
        marginBottom:12,
    },
    title:{
        fontSize:theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold,
        marginTop:12,
        paddingLeft:10,
    },
    recipes:{
<<<<<<< HEAD
        padding: 32
    },
    recipesContent:{
        gap: 16
=======
        padding:32
    },
    recipesContent:{
        gap:16
>>>>>>> 4e05fc18f84c9d4db48de1f6c75e23b25b7decf7
    }
})