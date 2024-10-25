import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
const ProjectInfo = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.projectBox}>
      <Text style={styles.projectHeader}>Project Info</Text>
      <Text style={styles.lighttext}>Description</Text>
      <Text style={styles.content}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui bland enorem yuren suufeen sulutan munur .. 
        {showMore && ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        <TouchableOpacity onPress={toggleShowMore}>
          <Text style={styles.seeMoreText}>{showMore ? 'See less' : 'See more'}</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.rowContainer}>
        <View style={styles.dateColumn}>
          <Text style={styles.rowLabel}>Start date</Text>
          <Text style={styles.rowValue}>01/09/23</Text>
        </View>
        <View style={styles.dateColumn}>
          <Text style={styles.rowLabel}>End date</Text>
          <Text style={styles.rowValue}>04/12/23</Text>
        </View>
        <View style={styles.statusColumn}>
          <Text style={styles.rowLabel}>Status</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBackground}>
              <View style={[styles.progressFill, { width: '78%' }]} />
            </View>
            <Text style={styles.statusText}>78%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  projectBox: {
    marginTop:24,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  projectHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#02111A',
    marginBottom: 10,
  },
  lighttext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6A7175',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E585E',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  statusColumn: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowLabel: {
    fontSize: 12,
    color: '#6A7175',
    marginBottom: 5,
    fontWeight:'400',
  },
  rowValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4E585E',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBackground: {
    width: 69,
    height: 10,
    backgroundColor: '#CBF2E0',
    borderRadius: 5,
    marginLeft: 40,
  },
  progressFill: {
    height: 10,
    backgroundColor: '#008545',
    borderRadius: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4E5855E',
    padding:16,
  },
  seeMoreText: {
    color: '#0C356A',
    marginTop: 5,
    fontWeight: '500',
  },
});

export default ProjectInfo;
