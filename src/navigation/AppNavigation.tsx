import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Home from '../screen/tabs/home/Home';
import More from '../screen/tabs/more/More';
import Orders from '../screen/tabs/orders/Orders';
import Requests from '../screen/tabs/requests/Request';

import home from "../assets/images/home.png";
import more from "../assets/images/more.png";
import orders from "../assets/images/orders.png";
import requests from "../assets/images/request.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#919191',
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = home;
          } else if (route.name === 'Orders') {
            iconName = orders;
          } else if (route.name === 'Requests') {
            iconName = requests;
          } else if (route.name === 'More') {
            iconName = more;
          }

          return (
            <Image
              source={iconName}
              style={[
                styles.tabBarIconStyle,
                { tintColor: color, width: size, height: size },
              ]}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
      <Tab.Screen name="Requests" component={Requests} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={More} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#1B2024',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarIconStyle: {},
});
