import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from '../icons/ArrowRight';
import Downarrowicon1 from '../icons/Downarrowicon1';

const TaskList = () => {
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState('All');

  const tasks = [
    { id: '0214', title: 'Wireframes', date: '05/09/23', status: 'Yet to start', statusColor: '#FFDAD3' },
    { id: '0212', title: 'Inspection', date: '04/09/23', status: 'In-progress', statusColor: '#FFDDB8' },
    { id: '0201', title: 'Base layout', date: '02/09/23', status: 'Completed', statusColor: '#CBF2E0' },
  ];

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Yet to start':
        return '#DF3813';
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
        <TouchableOpacity onPress={() => navigation.navigate('Taskscreen', { taskId: item.id })}>
          <ArrowRight width={16} height={16} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterChange = (status) => {
    setFilter(status);
    setShowDropdown(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Task details 
            <View style={styles.taskCountContainer}>
              <Text style={styles.taskCount}>03</Text>
            </View>
          </Text>
          <TouchableOpacity style={styles.filterButton} onPress={toggleDropdown}>
            <Text style={styles.filterButtonText}>{filter}</Text>
            <Downarrowicon1 width={16} height={16} />
          </TouchableOpacity>
        </View>

        {showDropdown && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={() => handleFilterChange('All')} style={styles.dropdownItem}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterChange('Yet to start')} style={styles.dropdownItem}>
              <Text>Yet to start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterChange('In-progress')} style={styles.dropdownItem}>
              <Text>In-progress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterChange('Completed')} style={styles.dropdownItem}>
              <Text>Completed</Text>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={filteredTasks}
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
    shadowColor: '#000000',
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
  taskCountContainer: {
    backgroundColor: '#D7E3FF',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  taskCount: {
    color: '#0C356A',
    fontWeight: '600',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
    height: 24,
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
    borderBottomWidth: 0.5,
    borderBottomColor: '#D9DBD',
  },
  taskContent: {
    flex: 1,
  },
  taskStatusContainer: {
    flexDirection: 'row',
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
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 8,
  },
});

export default TaskList;
