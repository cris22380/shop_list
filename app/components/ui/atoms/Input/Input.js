import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './Styles';

const Input = ({placeHolder, onChange, value}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        onChange={e => onChange(e.nativeEvent.text)}
        value={value}
      />
    </View>
  );
};

export default Input;
