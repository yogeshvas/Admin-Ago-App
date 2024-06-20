import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from '../screen/tabs/home/Home';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: '#919191',
//         tabBarStyle: styles.tabBarStyle,
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           return (
//             <Image
//               source={iconName}
//               style={[
//                 styles.tabBarIconStyle,
//                 {tintColor: color, width: size, height: size},
//               ]}
//             />
//           );
//         },
//       })}>
//       <Tab.Screen name="Cab" component={Home} options={{headerShown: false}} />
//     </Tab.Navigator>
//   );
// }

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#340092',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarIconStyle: {},
});
