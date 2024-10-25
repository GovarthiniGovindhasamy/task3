import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import TaskInfo from '../components/taskInfo';
import CheckList from '../components/checkBox';
import BottomTask from '../components/bottomTask';
import LogExpense from '../components/logExpanse';
import Users from '../components/users';
import Comments from '../components/commands';

export default function Taskscreen() {
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
      <TaskInfo />
      <CheckList />
      <LogExpense/>
      <Users />
      <Comments/>
      </View>
    </ScrollView>
  );
}
const style=StyleSheet.compose({
  container:{
    backgroundColor: '#F4F5F7',
  }
})
