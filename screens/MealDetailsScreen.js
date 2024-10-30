import { useRoute } from '@react-navigation/native';
import { Text, StyleSheet, View, Image, SectionList, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDescription from '../components/MealDescription';
import ListItems from '../components/ListItems';

function MealsDetailsScreen() {
    const route = useRoute();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView>

        <View style={styles.mealItem}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDescription
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                color={'white'}
                
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <ListItems selectedMeal={selectedMeal.ingredients}></ListItems>
            <Text style={styles.sectionTitle}>Steps</Text>
            <ListItems selectedMeal={selectedMeal.steps}></ListItems>
            </View>
            </View>
           
        </View>
        </ScrollView>
    );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
    mealItem: {
        borderRadius: 8,
        padding: 5,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: '#f0e3aa'
    },
    image: {
        width: '100%',
        height: 350,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
         color: '#f0e3aa'
    },
   
    listContainer: {
        maxWidth: '95%'

    },
    listOuterContainer: {
        alignItems: 'center'
    }
});
