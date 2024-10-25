import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowRight from '../icons/Back';

export default function DocumentsSection() {
  return (
    <View style={styles.documentsSection}>
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>
          Documents
          <View style={styles.documentsCount}>
            <Text style={styles.documentText}>26</Text>
          </View>
        </Text>
        <TouchableOpacity>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  documentsSection: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#02111A',
    fontWeight: '700',
    flex: 1,
  },
  documentsCount: {
    backgroundColor: '#E0E7FF',
    borderRadius: 30,
    marginRight: 16,
    margin: 10,
  },
  documentText: {
    color: '#1D4ED8',
    fontWeight: '600',
    fontSize: 14,
  },
});
