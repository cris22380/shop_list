import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';
import Input from '../atoms/Input';
import {styles} from './Styles';
import Button from '../atoms/Button';

const CategoryList = ({placeHolder, title, type}) => {
  const [productList, setProduct] = useState([]);
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const handleAddProcuct = value => {
    if (value) {
      setProduct([value, ...productList]);
      setValue('');
    }
  };

  const deleteProduct = product => {
    setProduct(productList.filter(item => item !== product));
  };

  return (
    <View style={styles.wrapper}>
      <Button title={title} onPress={() => setShow(!show)} type={type} />
      {show && (
        <>
          <TouchableWithoutFeedback onPress={() => handleAddProcuct(value)}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Agregar producto</Text>
              <Image
                source={require('../atoms/images/plus-24.png')}
                style={styles.icon}
              />
            </View>
          </TouchableWithoutFeedback>
          <Input placeHolder={placeHolder} onChange={setValue} value={value} />

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {productList.length > 0 &&
              productList.map((product, ind) => (
                <TouchableWithoutFeedback
                  onPress={() => deleteProduct(product)}
                  key={`prod-key-${ind}`}>
                  <View style={styles.productWrapper}>
                    <Text style={styles.product}>{product}</Text>
                    <Image
                      source={require('../atoms/images/delete.png')}
                      style={styles.icon}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default CategoryList;
