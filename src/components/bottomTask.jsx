import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function BottomTask() {
  return (
  <View>
      
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionHeader}>Log expense</Text>
          <Text style={styles.counter}>02</Text>
          <Text style={styles.addExpense}>+</Text>
        </View>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseText}>Expense name • 04/09/23 • 1050 AED</Text>
        </View>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseText}>Note buying • 01/09/23 • 241 AED</Text>
        </View>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Users</Text>
        <View style={styles.userRow}>
          
          <View style={styles.userImage}></View>
          <View style={styles.userImage}></View>
          <Text style={styles.moreUsers}>+3</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Comments</Text>

        <View style={styles.commentRow}>
          <View style={styles.userAvatar}></View>
          <View style={styles.commentBody}>
            <Text style={styles.commentName}>Hamza</Text>
            <Text style={styles.commentTime}>1 day ago</Text>
            <Text style={styles.commentText}>
              harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.
            </Text>
          </View>
        </View>

        
        <View style={styles.commentRow}>
          <View style={styles.userAvatar}></View>
          <View style={styles.commentBody}>
            <Text style={styles.commentName}>Mohammed</Text>
            <Text style={styles.commentTime}>12 hrs ago</Text>
            <Text style={styles.commentText}>Sure, Thanks</Text>
          </View>
        </View>

        
        <View style={styles.commentInputRow}>
          <TextInput style={styles.commentInput} placeholder="Add comments" />
          <Text style={styles.sendIcon}>send</Text>
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F5F7',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  counter: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C356A',
    backgroundColor: '#D7E3FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  addExpense: {
    fontSize: 20,
    color: '#FF5252',
    fontWeight: 'bold',
  },
  expenseItem: {
    marginBottom: 10,
  },
  expenseText: {
    fontSize: 14,
    color: '#333',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    marginRight: 8,
  },
  moreUsers: {
    fontSize: 16,
    color: '#0C356A',
    marginLeft: 10,
  },
  commentRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    marginRight: 10,
  },
  commentBody: {
    flex: 1,
  },
  commentName: {
    fontWeight: '700',
    fontSize: 14,
    color: '#333',
  },
  commentTime: {
    fontSize: 12,
    color: '#6A7175',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  commentInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  sendIcon: {
    fontSize: 18,
    color: '#0C356A',
    marginLeft: 10,
  },
});
