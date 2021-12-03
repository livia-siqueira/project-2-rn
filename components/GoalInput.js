import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');


    const addHandlerGoal = () => {
        if(!enteredGoal) return;
        props.onPress(enteredGoal);
        setEnteredGoal('');
    }
    const eventInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.layout}>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    value={enteredGoal}
                    onChangeText={eventInput}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.cancel} /></View>
                    <View style={styles.button}><Button title="ADD" color="green" onPress={addHandlerGoal} /></View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 20
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    buttons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    button: {
        width: '40%', 
    }
})

export default GoalInput;