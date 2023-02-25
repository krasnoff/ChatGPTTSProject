import React, { useState } from 'react';
import {Text, View} from 'react-native';

const App = () => {
  const [sample, setSample] = useState<string>('bobo')
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉 {sample}</Text>
    </View>
  );
};

export default App;