import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const members = [
  { id: '1', image: require('../assets/member1.png') },
  { id: '2', image: require('../assets/member1.png') },
  { id: '3', image: require('../assets/member1.png') },
];

const Users = () => {
  return (
    <View style={styles.membersContainer}>
      <View style={styles.membersLeft}>
        <Text style={styles.memberText}>Members</Text>
      </View>
      <View style={styles.membersRight}>
        {members.map((member, index) => (
          <Image
            key={index}
            source={member.image}
            style={styles.memberAvatar}
          />
        ))}
        <View style={styles.moreMembers}>
          <Text style={styles.moreText}>+3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  membersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    width: 328,
  },
  membersLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  memberText: {
    fontSize: 14,
    color: '#02111a',
    fontWeight: '500',
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

export default Users;
