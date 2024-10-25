import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CreateExpense = () => {
  const [expenseName, setExpenseName] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currency, setCurrency] = useState('AED');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [billable, setBillable] = useState(false);
  const [description, setDescription] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleUploadReceipt = () => {
    // Upload receipt logic goes here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create expense</Text>

      {/* Expense Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Expense name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Expense 01"
          value={expenseName}
          onChangeText={setExpenseName}
        />
      </View>

      {/* Date Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date *</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      {/* Currency and Amount */}
      <View style={styles.row}>
        <View style={[styles.inputGroup, styles.halfWidth]}>
          <Text style={styles.label}>Currency *</Text>
          <TextInput
            style={styles.input}
            value={currency}
            onChangeText={setCurrency}
            placeholder="Enter currency"
          />
        </View>
        <View style={[styles.inputGroup, styles.halfWidth]}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="2145"
          />
        </View>
      </View>

      {/* Category */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Category *</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Select category"
        />
      </View>

      {/* Billable Option */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Billable</Text>
        <TouchableOpacity onPress={() => setBillable(!billable)} style={styles.radioButton}>
          <Text>{billable ? '✓' : ''}</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Add a description"
          multiline
        />
      </View>

      {/* Upload Receipt */}
      <View style={styles.uploadContainer}>
        <TouchableOpacity onPress={handleUploadReceipt} style={styles.uploadButton}>
          <Text style={styles.uploadText}>Upload receipt</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  uploadContainer: {
    marginBottom: 16,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
  },
  uploadText: {
    fontSize: 14,
    color: '#4B5563',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E5E7EB',
  },
  saveButton: {
    backgroundColor: '#1D4ED8',
  },
  cancelText: {
    color: '#374151',
    fontWeight: '600',
  },
  saveText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default CreateExpense;
