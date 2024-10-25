import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const assets = [
  { id: '1', name: 'JCB', image: require('../assets/member1.png') },
  { id: '2', name: 'Asset Name', image: require('../assets/member1.png') },
  { id: '3', name: 'Laptop Dell', image: require('../assets/member1.png') },
  { id: '4', name: 'Laptop Dell', image: require('../assets/member1.png') },
  { id: '5', name: 'Laptop Dell', image: require('../assets/member1.png') },
];

export default function AssetList() {
  return (
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
    color: '#02111a',
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
});
