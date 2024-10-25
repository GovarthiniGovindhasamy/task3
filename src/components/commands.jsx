import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import SendIcon from '../icons/SendIcon';

const Comments = ({ userName }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    {
      id: '1',
      name: 'Hamza',
      time: '1 day ago',
      comment: 'harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.',
      image: require('../assets/member1.png'),
    },
    {
      id: '2',
      name: 'Mohammed',
      time: '12 hrs ago',
      comment: 'Sure, Thanks',
      image: require('../assets/member1.png'),
    },
  ]);

  const handleSendComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Math.random().toString(), // Generate a unique id
        name: userName,
        time: 'Just now', // Display "Just now" for the newly added comment
        comment,
        image: require('../assets/member1.png'), // Replace with the actual image if needed
      };
      setCommentsList([newComment, ...commentsList]); // Add new comment to the list
      setComment(''); // Clear input field after sending
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.commentTextContainer}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={commentsList}
        keyExtractor={item => item.id}
        renderItem={renderComment}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add comments"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handleSendComment} style={styles.sendButton}>
         <SendIcon/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginTop:12,
    marginLeft:16,
    marginBottom:17,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    color:'#02111A',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
    fontSize: 12,
    color:'#02111A',
  },
  time: {
    color: '#4E585E',
    fontSize: 12,
  },
  comment: {
    marginTop: 6,
    fontSize: 12,
    color: '#4E585E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#02111A',
  },
  sendButton: {
    marginLeft: 10,
  },
  sendText: {
    fontSize: 18,
    color: '#6A7175',
  },
});

export default Comments;
