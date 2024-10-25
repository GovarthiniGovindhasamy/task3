import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TaskInfo from '../components/TaskInfo';
import CheckList from '../components/CheckBox';
import BottomTask from '../components/BottomTask';
import LogExpense from '../components/LogExpanse';
import Users from '../components/Users';
import Comments from '../components/Commands';

export default function Taskscreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TaskInfo />
        <CheckList />
        <LogExpense />
        <Users />
        <Comments />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F6',
    marginleft: 16,
    marginRight: 16,
    marginbottom: 12,
  },
});
