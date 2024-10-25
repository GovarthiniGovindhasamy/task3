import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ProjectInfo from '../components/projectInfo';
import BackButton from '../components/backButton';
import TaskList from '../components/taskList';
import ProjectMembers from '../components/projectMembers';

export default function ProjectDetails() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton />
        <ProjectInfo />
        <TaskList />
        <ProjectMembers/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F6',
  },
});
