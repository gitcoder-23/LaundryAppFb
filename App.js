import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import HomeScreen from './src/screens/HomeScreen';
import {useDispatch} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {getLocales} from 'expo-localization';

import {getLocationAddress} from './src/app/slices/locationSlice';

export default function App() {
  const dispatch = useDispatch();

  // const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
  //   'we are loading your location',
  // );

  const [locationError, setLocationError] = useState('');

  const [locationAddress, setLocationAddress] = useState({});

  const checkLocation = async () => {
    try {
      let _serviceEnabled = await Location.hasServicesEnabledAsync();
      if (!_serviceEnabled) {
        Alert.alert(
          'Location services not enabled',
          'Please enable the location services',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        await Location.enableNetworkProviderAsync();
        _serviceEnabled = await Location.hasServicesEnabledAsync();
        if (!_serviceEnabled) {
          return false;
        }
      }

      let _permissionGranted = await Location.getForegroundPermissionsAsync();
      if (_permissionGranted.status != 'granted') {
        _permissionGranted = await Location.requestForegroundPermissionsAsync();
        if (_permissionGranted.status != 'granted') {
          return false;
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      let status = await checkLocation();
      console.log('status-loc--.', status);
      if (!status) {
        setLocationError('Permission to access location was denied');
        return;
      }
      // maintain promise using await
      // let locationDeteail = await Location.getCurrentPositionAsync({
      //   accuracy: Location.LocationAccuracy.Highest,
      // });
      // console.log('location->', locationDeteail);

      // let address = await Location.reverseGeocodeAsync({
      //   latitude: locationDeteail.coords.latitude,
      //   longitude: locationDeteail.coords.longitude,
      // });

      // console.log('address->', address);
      // setLocationAddress(address);

      const {coords} = await Location.getCurrentPositionAsync();
      console.log('coords->', coords);

      if (coords) {
        const {latitude, longitude} = coords;

        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        console.log('response-loc--.', response);

        for (let item of response) {
          let address = `${item.name}, ${item.city}, ${item.postalCode}`;

          console.log('get-address-.', address);
          dispatch(getLocationAddress(address));
          // setdisplayCurrentAddress(address);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView contentInsetAdjustmentBehavior="automatic">
      <StatusBar styles="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
