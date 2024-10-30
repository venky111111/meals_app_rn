import { Text, View, StyleSheet } from 'react-native';

function ListItems({ selectedMeal }) {
    return (
        <View style={styles.listItems}>
            {selectedMeal.map((item) => (
                <Text key={item} style={styles.itemText}> {item}</Text>
            ))}
        </View>
    );
}

export default ListItems;

const styles = StyleSheet.create({
    listItems: {
        alignItems: 'center'
    },
   
    itemText: {
        backgroundColor: '#c9c3a9',
        width: '100%',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 8
    
    }
});
