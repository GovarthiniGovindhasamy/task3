import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BackButton from './backButton';
import BackButtons from './backButton1';

export default function TaskInfo() {
  return (
    <ScrollView
    >
    <BackButtons/>
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Task Info  <Text style={styles.date}>05/09/23</Text></Text>
       
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Yet to start</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi...
      </Text>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.value}>ID 0213</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>General</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.label}>Priority</Text>
          <Text style={styles.value}>Medium</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:24,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#6A7175',
  },
  statusButton: {
    backgroundColor: '#F0F4FF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusText: {
    color: '#0C356A',
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#6A7175',
    marginBottom: 10,
  },
  seeMore: {
    color: '#FFA726',
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoColumn: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    color: '#6A7175',
    fontWeight: '500',
    marginBottom: 3,
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
});
