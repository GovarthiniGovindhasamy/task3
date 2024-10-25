import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../icons/back'; // Assuming Back is your custom icon
import ArrowLeft from '../icons/arrowLeft';

export default function BackButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <ArrowLeft style={styles.icon} />
      </View>
      <View style={styles.headertext}>
        <Text style={styles.header}>Wireframes</Text>
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
    fontSize: 24,
    paddingLeft:3,
  },
  headertext: {
    marginTop: 32,
    marginLeft: 16,
  },
  header: {
    fontSize: 19,
    fontWeight: '700',
    color:'#02111A',
  },
});
