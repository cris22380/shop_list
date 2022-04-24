import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Button from '../../ui/atoms/Button';
import {styles} from './Styles';

const HomeScreen = ({navigation}) => {
  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.wrapper}>
            <Button
              title="Crear lista de compras"
              type="primary"
              onPress={() => handlePress('Crear lista de compras')}
            />
            <Button title="Ver lista de compras" type="secondary" />
            <Button title="Ir de compras" type="tertiary" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;
