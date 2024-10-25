import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TickIcon from '../icons/tick'; 
export default function CheckList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Creating IA for project management', checked: false },
    { id: 2, title: 'Flow chart ideation', checked: false },
    { id: 3, title: 'UI layout setup', checked: true },
    { id: 4, title: 'Basic UI components', checked: false },
  ]);

  const toggleCheck = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>
          Check list <Text style={styles.counter}>04</Text>
        </Text>
      </View>

      {tasks.map((task) => (
        <View key={task.id} style={styles.taskRow}>
          <TouchableOpacity
            style={[styles.checkbox, task.checked && styles.checkedBox]}
            onPress={() => toggleCheck(task.id)}
          >
            {task.checked && <TickIcon />}
          </TouchableOpacity>
          <Text style={styles.taskText}>{task.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  counter: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C356A',
    marginLeft: 8,
    backgroundColor: '#D7E3FF',
    borderRadius: 50,
    height: 25,
    width: 25,
    textAlign: 'center',
    paddingTop: 2,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#CBD2E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  checkedBox: {
    backgroundColor: '#0C356A', // Blue background when checked
    borderColor: '#0C356A',
  },
  taskText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});
