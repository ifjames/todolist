import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, FlatList, Text, View } from 'react-native';

const TodoList = () => {
  const [task, setTask] = useState([]); 
  const [input, setInput] = useState(''); 

  const addTask = () => {
    if (input) {
      setTask([...task, input]); 
      setInput('');
    }
  };

  const removeTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };

  return (
    <View>
      <TextInput
        placeholder="Add a task"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={task}
        renderItem={({ item, index }) => (
          <View style={styles.items}>
          
           <Text style = {styles.itemText}>{item}</Text> 
           <Button title="Remove" onPress={() => removeTask(index)}>{item} </Button> 

          
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
  },
});

export default TodoList;
