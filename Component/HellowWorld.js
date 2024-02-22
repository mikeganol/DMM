import React from 'react';
import { View, Text, Image } from 'react-native';

const HelloWorld = () => {
  return (
    <View>
         <Text>Hello, World!</Text>
          <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg?w=826&t=st=1708591883~exp=1708592483~hmac=eaa90cb4e850d30255ea67783ad24ed2c290e10f75d11773e8cc9e2cd81dd734',
        }}
        style={{width: 200, height: 200}}
      />
     
    </View>
  );
};

export default HelloWorld;