
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Taskscreen from './src/screens/Taskscreen';
import FirstPage from './src/screens/FirstPage';
import CreateExpense from './src/components/expanse';
import LogExpense from './src/components/LogExpanse';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          component={FirstPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Taskscreen"
          component={Taskscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogExpense"
          component={LogExpense}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
