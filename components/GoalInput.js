import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ isModalVisible, addGoal, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
      addGoal(enteredGoal);
      setEnteredGoal('');
    }

    return (
      <Modal visible={isModalVisible} animationType="slide">
        <View 
        style={styles.inputContainer}
        >
          <TextInput
            placeholder="Course goal"
            style={styles.input}
            onChangeText={inputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="ADD"
                onPress={addGoalHandler}        
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CANCEL"
                color="red"
                onPress={onCancel}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  inputContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 120,
  }
});

export default GoalInput;