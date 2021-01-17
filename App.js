import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals, { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsModalVisible(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button
        title="Add new goal"
        onPress={() => setIsModalVisible(true)}
      />
      <GoalInput
        isModalVisible={isModalVisible}
        addGoal={addGoalHandler}
        onCancel={closeModal}
      />
      <FlatList
        keyExtractor={(item) => item.id }
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
