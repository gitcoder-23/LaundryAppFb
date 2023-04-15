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

const HomeScreen = ({displayCurrentAddress}) => {
  console.log('displayCurrentAddress-->', displayCurrentAddress);
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
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
