import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MealDescription from "./MealDescription";

function MealItem({ title, imageUrl, duration, complexity, affordability, categoryColor, id }) {
    const navigation = useNavigation();

    function navigateHandler() {
        navigation.navigate('MealsDetails', { mealId: id, mealTitle: title });
    }

    return (
        <View style={[styles.mealItem, { backgroundColor: '#edbea1' }]}>
            <Pressable android_ripple={{ color: 'white' }} onPress={navigateHandler}>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDescription
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        borderRadius: 10,
        margin: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 280,
        marginBottom: 10,
    }
});
