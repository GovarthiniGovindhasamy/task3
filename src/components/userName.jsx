import React from 'react';
import { SafeAreaView } from 'react-native';
import Comments from './components/Comments'; // Import the component

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Comments userName="John Doe" /> {/* Passing the user's name */}
    </SafeAreaView>
  );
};

export default App;
