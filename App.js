import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import ItemList from './components/itemList'


export default function App() {
  const [listGoal, setListGoal] =  useState([]);
  const [statusModal, setStatusModal] = useState(false);


  const addGoalHandler = (enteredGoal) => {
    setListGoal((goals) =>
      [
        ...goals,
        { id: Math.random().toString(), item: enteredGoal }
      ]
    )
    setStatusModal(false)
  }

  const handleModal = () => {
    setStatusModal(true)
  }

  const deleteGoalHandle = (id) => {
    setListGoal((goals) => 
     goals.filter((goal) => goal.id != id)
    );
  };

  const cancelGoal = () => {
    setStatusModal(false)
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={handleModal}/>
      <GoalInput cancel={cancelGoal} placeholder="Course Goal" onPress={addGoalHandler} visible={statusModal}/>
      <FlatList keyExtractor={(item, index) => item.id} data={listGoal} renderItem={itemData => (
        <ItemList onPress={deleteGoalHandle} itemData={itemData.item.item} id={itemData.item.id} />
      )} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});
