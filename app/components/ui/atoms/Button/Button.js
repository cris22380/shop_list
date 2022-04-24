import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from './Styles';
import {colors} from '../../../Colors/colors';

const TYPE_MAP = {
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary, //'#DAA520', //'#FF1493', //'#ADFF2F', //, //'#FFD700',
  product_primary: colors.deepPink,
  product_secondary: colors.gold,
  product_tertiary: colors.orange,
  grey: '	#A9A9A9',
};

const Button = ({title, type, onPress}) => {
  return (
    <View style={[styles.buttonWrapper, {backgroundColor: TYPE_MAP[type]}]}>
      <TouchableWithoutFeedback
        onPress={onPress}
        title={title}
        color="#fff"
        style={styles.textButton}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Button;
