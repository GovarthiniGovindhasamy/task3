import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlusIcon from '../icons/plus'

export default function LogExpense() {
  const expenses = [
    { id: 1, name: 'Expense name', date: '04/09/23', amount: '1050 AED' },
    { id: 2, name: 'Note buying', date: '01/09/23', amount: '241 AED' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.headerTextRow}>
          <Text style={styles.header}>Log expense</Text>
          <Text style={styles.counter}>02</Text>
        </View>
        <TouchableOpacity>
          <PlusIcon />
        </TouchableOpacity>
      </View>

      {/* Expenses */}
      {expenses.map((expense) => (
        <View key={expense.id} style={styles.expenseRow}>
          <Text style={styles.expenseText}>
            {expense.name} • {expense.date} • {expense.amount}
          </Text>
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
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  counter: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    backgroundColor: '#D7E3FF',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 10,
  },
  expenseRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
  },
  expenseText: {
    fontSize: 14,
    color: '#333',
  },
});
