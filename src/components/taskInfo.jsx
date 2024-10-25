import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackButton from './BackButton';
import BackButtons from './BackButton1';
import Downarrowicon1 from '../icons/Downarrowicon1';

export default function TaskInfo() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ScrollView>
      <BackButtons />
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>
            Task Info <Text style={styles.date}>05/09/23</Text>
          </Text>
          <TouchableOpacity style={styles.statusButton}>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Yet to start</Text>
              <Downarrowicon1 style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.lighttext}>Description</Text>
        <Text style={styles.content}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui bland
          {showMore &&
            ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          <TouchableOpacity onPress={toggleShowMore}>
            <Text style={styles.seeMore}>
              {showMore ? ' See less' : ' See more'}
            </Text>
          </TouchableOpacity>
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>ID 0213</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Type</Text>
            <Text style={styles.value}>General</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.label}>Priority</Text>
            <Text style={styles.value}>Medium</Text>
          </View>
        </View>
      </View>
      <View />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: '#02111A',
  },
  date: {
    fontSize: 12,
    color: '#4E585E',
  },
  lighttext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6A7175',
    marginBottom: 6,
    marginLeft: 16,
  },
  content: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E585E',
    marginBottom: 10,
    marginLeft: 16,
  },
  statusButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#0C356A',
    borderWidth: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0C356A',
  },
  icon: {
    marginLeft: 5,
  },
  seeMore: {
    color: '#FFA726',
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
  },
  infoColumn: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    color: '#6A7175',
    fontWeight: '500',
    marginBottom: 3,
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
});
