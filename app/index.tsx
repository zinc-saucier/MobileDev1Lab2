/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View,} from 'react-native';
import { useState } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';


function App() {
  
  const [tasks, setTask] = useState<string[]>([...'Do, laundry','Go to gym','Walk dog']);

  return (
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
