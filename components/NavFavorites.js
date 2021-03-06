import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';



const NavFavorites = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const data = [
    {
      id: '123',
      icon: 'home',
      location: 'Home',
      destination: '2805 Red Ivy Cove, Pflugerville, TX, 78660',
    },
    {
      id: '456',
      icon: 'briefcase',
      location: 'Work',
      destination: 'Shop',
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            dispatch(
              setOrigin({
                location: data.destination,
                description: data.location,
              })
            );
            dispatch(setDestination(null));
            navigation.navigate('MapScreen');
          }}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
