import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ArrowRight from '../icons/arrowRight';
import DropDown from '../icons/dropDown';

const TaskList = () => {
  const tasks = [
    { id: '0214', title: 'Wireframes', date: '05/09/23', status: 'Yet to start', statusColor: '#FFDAD3' },
    { id: '0212', title: 'Inspection', date: '04/09/23', status: 'In-progress', statusColor: '#FFDDB8' },
    { id: '0201', title: 'Base layout', date: '02/09/23', status: 'Completed', statusColor: '#CBF2E0' },
  ];

  // Function to set text color for status
  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Yet to start':
        return '#FF4500';
      case 'In-progress':
        return '#D17800';
      case 'Completed':
        return '#008545';
      default:
        return '#000';
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={styles.taskContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.id}>ID {item.id} • {item.date}</Text>
      </View>
      <View style={styles.taskStatusContainer}>
        <TouchableOpacity style={[styles.statusButton, { backgroundColor: item.statusColor }]}>
          <Text style={[styles.statusText, { color: getStatusTextColor(item.status) }]}>{item.status}</Text>
        </TouchableOpacity>
        <ArrowRight width={16} height={16} />
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Task details <Text style={styles.taskCount}>03</Text>
          </Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>All</Text>
            <DropDown width={16} height={16} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#02111A',
  },
  taskCount: {
    color: '#9C9EB9',
    backgroundColor: '#D7E3FF',
    borderRadius: 12, // Half of the width and height to make it circular
    width: 24, // Equal width and height for a circle
    height: 24,
    textAlign: 'center', // Center the text horizontally
    lineHeight: 24, // Center the text vertically
    fontWeight: '600',
  },
  filterButton: {
    flexDirection: 'row', // Align text and arrow in a row
    alignItems: 'center', // Vertically center text and arrow
    justifyContent: 'space-between', // Ensure spacing between text and arrow
    width: 48, // Set the width to 48
    height: 24, // Set the height to 24
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0C356A',
  },
  filterButtonText: {
    color: '#0C356A',
    fontWeight: '400',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d9dbdd',
  },
  taskContent: {
    flex: 1,
  },
  taskStatusContainer: {
    flexDirection: 'row', // Arrange status text and arrow in a row
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  id: {
    fontSize: 12,
    color: '#6a7175',
    marginTop: 8,
  },
  statusButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8, // Space between status text and arrow
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default TaskList;
