import React from 'react';
import { View, Text} from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <View>
      
      <Text>Hello, {username}!</Text>
    </View>

  );
};

const DMM = () => {
  return (
    <View>
      <GreetUser username="Mike Jun" />
      <GreetUser username="Merlinda" />
      <GreetUser username="Dariel" />
    </View>
  );
};

export default DMM; 
