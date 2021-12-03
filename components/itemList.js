import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'


const ItemList = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress.bind(null, props.id)}>
            <View style={styles.listItem}>
            <Text>{props.itemData}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ItemList;