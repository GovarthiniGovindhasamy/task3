import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function MemberModal({ visible, onClose, members }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Members</Text>
          <Text style={styles.memberCount}>0{members.length} Members</Text>
          
          <ScrollView>
            {members.map((member) => (
              <View key={member.id} style={styles.memberCard}>
                <Image source={member.image} style={styles.memberAvatar} />
                <View style={styles.memberInfo}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberEmail}>{member.email}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background for overlay effect
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%', // Fixed height of the modal
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#02111A',
  },
  memberCount: {
    color: '#808080',
    fontSize: 14,
    marginBottom: 10,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberInfo: {
    flexDirection: 'column',
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
  },
  memberEmail: {
    fontSize: 14,
    color: '#808080',
  },
  closeButton: {
    backgroundColor: '#FFF',
    borderColor: '#0000FF',
    borderWidth: 1,
    paddingVertical: 10,
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#0000FF',
    fontWeight: '600',
  },
});
