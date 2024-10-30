import {FlatList, View} from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
function CategoriesScreen(){


    function renderCategory(itemData){
        
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} id={itemData.item.id} />
    }


    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategory} numColumns={2}></FlatList>
       
    )
}
export default CategoriesScreen;