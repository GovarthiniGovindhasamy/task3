import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import MemberModal from './MemberModal';

const members = [
  { id: '1', name: 'Mohammed', email: 'abdul_metanas@gmail.com', image: require('../assets/member1.png') },
  { id: '2', name: 'Aaban', email: 'aaban_metanas@gmail.com', image: require('../assets/member1.png') },
  { id: '3', name: 'Hamza', email: 'hamza_metanas@gmail.com', image: require('../assets/member1.png') },
];

export default function MemberList() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.section}>
      <View style={styles.membersContainer}>
        <View style={styles.membersLeft}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.memberText}>Members</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.membersRight}>
          {members.slice(0, 3).map((member, index) => (
            <Image key={index} source={member.image} style={styles.memberAvatar} />
          ))}
          <View style={styles.moreMembers}>
            <Text style={styles.moreText}>+{members.length - 2}</Text>
          </View>
        </View>
      </View>
      <MemberModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        members={members}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
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
  membersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  membersLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  memberText: {
    fontSize: 14,
    color: '#02111A',
    fontWeight: '700',
  },
  membersRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 22,
    height: 22,
    borderRadius: 20,
    marginRight: -10,
  },
  moreMembers: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreText: {
    fontSize: 16,
    color: '#000',
  },
});
