import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const members = [
  { id: '1', image: require('../assets/member1.png') },
  { id: '2', image: require('../assets/member1.png') },
  { id: '3', image: require('../assets/member1.png') },
];

const assets = [
  { id: '1', name: 'JCB', image: require('../assets/member1.png') },
  { id: '2', name: 'Asset Name', image: require('../assets/member1.png') },
  { id: '3', name: 'Laptop Dell', image: require('../assets/member1.png') },
  { id: '4', name: 'Laptop Dell', image: require('../assets/member1.png') },
  { id: '5', name: 'Laptop Dell', image: require('../assets/member1.png') },
];

export default function ProjectMembers() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
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
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Assets</Text>
        <FlatList
          horizontal
          data={assets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.assetItem}>
              <Image source={item.image} style={styles.assetImage} />
              <Text style={styles.assetName}>{item.name}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Documents Section */}
      <View style={styles.documentsSection}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <View style={styles.documentsCount}>
          <Text style={styles.documentText}>26</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
    marginTop:12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: '#02111a',
  },
  membersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:52,
    width:328,
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
  assetItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  assetImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  assetName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  documentsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
  },
  documentsCount: {
    backgroundColor: '#E0E7FF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  documentText: {
    color: '#1D4ED8',
    fontWeight: '600',
  },
  arrowText: {
    fontSize: 18,
    color: '#1D4ED8',
  },
});
