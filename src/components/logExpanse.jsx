import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import PlusIcon from '../icons/Plus'; 
import CreateExpenseForm from './CreateExponseForm';

export default function LogExpense() {
  const [modalVisible, setModalVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleAddIconClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveExpense = (newExpense) => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    handleCloseModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headerTextRow}>
          <Text style={styles.header}>Log expense</Text>
          <Text style={styles.counter}>0{expenses.length}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handleAddIconClick}>
          <PlusIcon />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <CreateExpenseForm onClose={handleCloseModal} onSave={handleSaveExpense} />
      </Modal>

      <ScrollView>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <View key={expense.id} style={styles.expenseRow}>
              <Text style={styles.expenseText}>
                {expense.name} • {expense.date} • {expense.amount}
              </Text>
            </View>
          ))
        ) : (
          <Text>No expenses logged yet.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 8,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#02111A',
  },
  counter: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C356A',
    backgroundColor: '#D7E3FF',
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 5,
  },
  iconContainer: {
    padding: 5,
  },
  expenseRow: {
    paddingVertical: 10,
  },
  expenseText: {
    fontSize: 14,
    color: '#333',
  },
});
