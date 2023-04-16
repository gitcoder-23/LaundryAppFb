import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import {MaterialIcons, Feather} from '@expo/vector-icons';
import React, {useEffect, useState} from 'react';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../app/slices/productSlice';

const HomeScreen = ({displayCurrentAddress}) => {
  console.log('displayCurrentAddress-->', displayCurrentAddress);

  const {cart} = useSelector(state => state.cart);

  console.log('state-cart-->', cart);

  const {allProduct} = useSelector(state => state.product);

  console.log('state-allProduct-->', allProduct);

  const dispatch = useDispatch();

  const mockProducts = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];

  useEffect(() => {
    if (allProduct.length > 0) {
      return;
    } else {
      const fetchProducts = () => {
        mockProducts.map(productData => dispatch(getProducts(productData)));
      };
      fetchProducts();
    }
  }, []);

  return (
    <ScrollView>
      {/* Location and Profile */}
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>

        <Pressable
          // onPress={() => navigation.navigate('Profile')}
          style={{marginLeft: 'auto', marginRight: 7}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            }}
          />
        </Pressable>
      </View>
      {/* Search Bar */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 0.8,
          borderColor: '#C0C0C0',
          borderRadius: 7,
        }}>
        <TextInput placeholder="Search for items or More" />
        <Feather name="search" size={24} color="#fd5c63" />
      </View>
      {/* Image Carousel */}
      <Carousel />
      {/* Services Component */}
      <Services />

      {/* Render all products */}
      {allProduct.map((proItem, index) => {
        return <DressItem item={proItem} key={index} />;
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
