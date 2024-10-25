import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Calender from '../icons/Calender';

export default function CreateExpenseForm({ onClose, onSave }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [isBillable, setIsBillable] = useState(false); 

  const handleSave = () => {
    if (!expenseName || !expenseDate || !expenseAmount) {
      alert('Please fill in all fields');
      return;
    }
    const newExpense = {
      id: Math.random().toString(), 
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      billable: isBillable,
    };
    onSave(newExpense); 
  };

  const toggleBillable = () => {
    setIsBillable((prevState) => !prevState); 
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.modalTitle}>Create expense</Text>

          <TextInput
            style={styles.input}
            placeholder="Expense name *"
            value={expenseName}
            onChangeText={setExpenseName}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Date *"
              value={expenseDate}
              onChangeText={setExpenseDate}
            /><Calender/>
            <TouchableOpacity style={styles.iconButton}>
              
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Currency *"
              value="AED" 
              editable={false}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Amount"
              value={expenseAmount}
              onChangeText={setExpenseAmount}
              keyboardType="numeric"
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Category *"
            value="Select category" 
            editable={false}
          />
          
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={toggleBillable} style={[styles.circle, isBillable && styles.circleSelected]}>
             </TouchableOpacity>
            <Text style={styles.label}>Billable</Text>
          </View>

          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            multiline
          />

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>Upload receipt</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  scrollView: {
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    color:'#02111A',
  },
  input: {
    height: 62,
    borderColor: '#D9DBDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginLeft: 10,
    color:'#4E585E',
    fontWeight:'400',
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  uploadButton: {
    borderColor: '#0C356A',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth:1,
  },
  uploadText: {
    color: '#02111A',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#FFF',
    borderColor: '#0C356A',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    width: '48%',
  },
  cancelButtonText: {
    color: '#0C356A',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#0C356A',
    borderRadius: 6,
    padding: 10,
    width: '48%',
  },
  saveButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0C356A',
    backgroundColor: '#FFF',
  },
  circleSelected: {
    backgroundColor: '#0C356A', 
  },
});
