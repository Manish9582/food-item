import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index'
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
          title: 'Home'
        }}
      />
      <Tabs.Screen name='like'
        options={{
          tabBarIcon: () => (
            <AntDesign name="hearto" size={24} color="black" />
          ),
          title: 'Like'
        }}
      />
      <Tabs.Screen name='shop'
        options={{
          tabBarIcon: () => (
            <Entypo name="shop" size={24} color="black" />
          ),
          title: 'Shop'
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user-circle" size={24} color="black" />
          ),
          title: 'Profile'
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})