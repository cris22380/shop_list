import React from 'react';
import {View, ScrollView} from 'react-native';
import CategoryList from '../../ui/CategoryList';
import {styles} from './Styles';

const CreationList = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.wrapper}>
        <CategoryList
          placeHolder="ingresar producto"
          title="Productos de almacén"
          type="primary"
        />
        <CategoryList
          placeHolder="ingresar producto"
          title="Bebidas"
          type="secondary"
        />
        <CategoryList
          placeHolder="ingresar producto"
          title="Alimentos frescos"
          type="tertiary"
        />
        <CategoryList
          placeHolder="ingresar producto"
          title="Cuidado personal"
          type="product_tertiary"
        />
        <CategoryList
          placeHolder="ingresar producto"
          title="Productos de limpieza"
          type="product_secondary"
        />
        <CategoryList
          placeHolder="ingresar producto"
          title="Productos de farmacia"
          type="product_tertiary"
        />
      </View>
      </ScrollView>
  );
};

export default CreationList;

//productos de almacén, bebidas, alimentos frescos, cuidado personal, productos de limpieza, productos de farmacia
