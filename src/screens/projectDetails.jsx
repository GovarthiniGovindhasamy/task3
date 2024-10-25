import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ProjectInfo from '../components/ProjectInfo';
import BackButton from '../components/BackButton';
import TaskList from '../components/TaskList';
import ProjectMembers from '../components/projectMembers';

export default function ProjectDetails() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton />
        <ProjectInfo />
        <TaskList />
        <ProjectMembers />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
