import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ProjectInfo from '../components/ProjectInfo';
import BackButton from '../components/BackButton';

import TaskList from '../components/TaskList';
import MemberList from '../components/MemberList';
import AssetList from '../components/AssetList';
import DocumentsSection from '../components/Documents';

export default function FirstPage() {
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <ProjectInfo />
      <TaskList />
      <MemberList />
      <AssetList />
      <DocumentsSection />
    </ScrollView>
  );
}

const renderTaskItem = (title, id, date, statusText, statusStyle) => (
  <View style={styles.taskItem}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '30',
      }}>
      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskId}>
          ID {id} • {date}
        </Text>
      </View>
      <Text style={[styles.taskStatus, statusStyle]}>{statusText}</Text>
    </View>
  </View>
);
const renderAssetItem = (image, name) => (
  <View style={styles.assetItem}>
    <Image source={{uri: image}} style={styles.assetImage} />
    <Text style={styles.assetText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F0F3F6',
  },
  taskBox: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  taskHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  taskHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  taskCounter: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C356A',
    borderWidth: 0.1,
    borderRadius: 50,
    height: 25,
    width: 25,
    textAlign: 'center',
    paddingTop: 2,
    marginHorizontal: 10,
    backgroundColor: '#D7E3FF',
  },
  taskFilter: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C356A',
  },
  taskItem: {
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  taskId: {
    fontSize: 12,
    color: '#6A7175',
  },
  taskStatus: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
  },
  taskStatusNotStarted: {
    color: '#FF6B6B',
    backgroundColor: '#FFDAD3',
  },
  taskStatusInProgress: {
    color: '#FFB74D',
    backgroundColor: '#FFE0B2',
  },
  taskStatusCompleted: {
    color: '#81C784',
    backgroundColor: '#C8E6C9',
  },
  members: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  memtext: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },
  memberImages: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberCount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0C356A',
  },
  assetsBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  assetsHeader: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },
  assetItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  assetItem: {
    alignItems: 'center',
  },
  assetImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  assetText: {
    fontSize: 12,
    color: '#333',
  },
  documentsBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  documentsHeader: {
    fontWeight: '700',
    fontSize: 14,
  },
  documentsCounter: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C356A',
    backgroundColor: '#D7E3FF',
    paddingHorizontal: 10,
    borderRadius: 50,
    textAlign: 'center',
  },
});
