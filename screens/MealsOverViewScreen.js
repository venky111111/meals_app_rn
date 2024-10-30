import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverViewScreen() {
    const route = useRoute();
     const  {categoryId, categoryColor, categoryTitle}  = route.params;
     const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >=0;
     })

     function renderCategory(itemData){
        return <MealItem  title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration}
         complexity = {itemData.item.complexity} affordability={itemData.item.affordability} categoryColor={categoryColor} id={itemData.item.id}/>

     }

    return (
        <View >
          
            <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderCategory} ></FlatList>

        </View>
    );
}

export default MealsOverViewScreen;

