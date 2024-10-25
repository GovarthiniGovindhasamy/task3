import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';

// Dictionary to store member images
const memberImages = {
  'Mohammed': require('../assets/member1.png'),
  'Aaban': require('../assets/member1.png'),
  'Hamza': require('../assets/member1.png'),
  'Abbas': require('../assets/member1.png'),
};

// Member data
const members = [
  { name: 'Mohammed', email: 'abdul_metanas@gmail.com' },
  { name: 'Aaban', email: 'aaban_metanas@gmail.com' },
  { name: 'Hamza', email: 'hamza_metanas@gmail.com' },
  { name: 'Abbas', email: 'abbas_metanas@gmail.com' },
];

export default function MembersPopup() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.popup}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.openButton}>Open Members</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.text}>
              <Text style={styles.header}>Members</Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.members}>{`${members.length} Members`}</Text>
            </View>
            <View style={styles.memberContainer}>
              {members.map((member, index) => (
                <View key={index} style={styles.box}>
                  <Image source={memberImages[member.name]} style={styles.profileImage} />
                  <View>
                    <Text style={styles.member}>{member.name}</Text>
                    <Text style={styles.email}>{member.email}</Text>
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>+
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns modal to the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 16,
    height: '50%', // Modal occupies 50% of the screen height
  },
  text: {
    paddingBottom: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: '#02111a',
  },
  count: {
    paddingBottom: 16,
  },
  members: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4e585e',
  },
  memberContainer: {
    marginBottom: 24,
    flexGrow: 1, // Allow to grow for scrolling if needed
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#D9DBDD',
    borderWidth: 2,
    padding: 12,
    marginBottom: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  member: {
    fontSize: 14,
    fontWeight: '600',
    color: '#02111A',
  },
  email: {
    fontSize: 12,
    color: '#4e585e',
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#02111A',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  closeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#02111A',
  },
  openButton: {
    padding: 10,
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: 5,
  },
});
