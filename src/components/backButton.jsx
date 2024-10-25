import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../icons/Back';
import ArrowLeft from '../icons/ArrowLeft';

export default function BackButton() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <ArrowLeft style={styles.icon} />
      </View>
      <View style={styles.headertext}>
        <Text style={styles.header}>Metanas UI Design</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 50,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C356A',
    marginTop: 32,
    marginLeft: 16,
  },
  icon: {
    paddingLeft: 8,
    fontSize: 24,
  },
  headertext: {
    marginTop: 32,
    marginLeft: 16,
  },
  header: {
    fontSize: 19,
    fontWeight: '700',
    color: '#02111A',
  },
});
