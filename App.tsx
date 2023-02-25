import React, { useState } from 'react';
import {Alert, Button, Text, View} from 'react-native';

const App = () => {
  const [sample, setSample] = useState<string>('bobo')

  const clickhandler = () => {
    console.log('success')
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉 {sample}</Text>
      <Button title='Press Me' onPress={() => clickhandler()}></Button>
    </View>
  );
};

export default App;