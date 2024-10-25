import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TickIcon from '../icons/Tick';

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

      {tasks.map((task, index) => (
        <View
          key={task.id}
          style={[
            styles.taskRow,
            index !== tasks.length - 1 && styles.taskRowBorder, // Apply border only if not last item
          ]}
        >
          <TouchableOpacity
            style={[styles.checkbox, task.checked && styles.checkedBox]}
            onPress={() => toggleCheck(task.id)}
          >
            {task.checked && <TickIcon style={styles.tickIcon} />}
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
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  header: {
    fontSize: 14,
    fontWeight: '700',
    color: '#02111A',
  },
  counter: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C356A',
    marginLeft: 8,
    backgroundColor: '#D7E3FF',
    borderRadius: 25,
    height: 25,
    width: 25,
    textAlign: 'center',
    lineHeight: 25,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 8,
  },
  taskRowBorder: {
    borderBottomWidth: 1,
    borderColor: '#CBD2E1',
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
    backgroundColor: '#0C356A',
    borderColor: '#D9DBDD',
    borderWidth: 2,
  },
  taskText: {
    fontSize: 11,
    color: '#4E585E',
    fontWeight: '500',
  },
  tickIcon: {
    color: '#FFF',
  },
});
