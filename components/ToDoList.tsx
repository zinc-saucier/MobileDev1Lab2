import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'

type Task = {
  name: string;
}
type TaskProps ={
  tasks: Task[];
}

export default function ToDoList ({tasks}:TaskProps) {

  const { name } = tasks;
  
  

  return (
    <ScrollView>{tasks.map((task)=>(
      <Pressable>
        <View key={task.name} style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>{task.name}</Text>
        </View>
      </Pressable>
     ))}
      
      {/* <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable> */}
    </ScrollView>
  );
}





const styles = StyleSheet.create({
    task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
})