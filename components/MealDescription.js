import {View, Text, StyleSheet} from 'react-native';
import { useEffect } from 'react';

function MealDescription({duration, complexity, affordability, color}){

    return ( <View style={styles.details}>
        <Text style={[styles.detailItem, {color: color}]}>{duration} M</Text>
        <Text style={[styles.detailItem, {color: color}]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, {color: color}]}>{affordability.toUpperCase()}</Text>
    </View>);
}
export default MealDescription;

const styles = StyleSheet.create({

    details: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10
        
    },
    detailItem:{
        fontSize: 14
    }
});
