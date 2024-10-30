import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({ title, color, id}) {
    const navigation = useNavigation();

    function navigateHandler() {
        navigation.navigate('MealsOverView', { categoryId: id, categoryColor: color, categoryTitle: title });
    }

    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable 
                style={styles.button} 
                android_ripple={{ color: '#afc9c9' }}
                onPress={navigateHandler}
            >
                <View style={styles.gridItemText}>
                    <Text style={styles.gridText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16, 
        height: 150,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    gridItemText: {
       flex: 1,
       justifyContent: 'center',
       padding: 16, 
       alignItems: 'center',
    },
    gridText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        flex: 1,
    },
});
