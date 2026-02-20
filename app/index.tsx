/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View,} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  return (
    <View>
      <ToDoList/>
      <ToDoForm/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
