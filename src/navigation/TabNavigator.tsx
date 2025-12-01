
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import MedicalPaper from '../screens/MedicalPaper';
import BottomTabs from '../components/common/BottomTabs';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, navigation }) => {
        const tabs = state.routes.map(route => {
          let icon;
          if (route.name === 'Home') {
            icon = require('../../assets/images/home-icon.png');
          } else if (route.name === 'Discover') {
            icon = require('../../assets/images/explore-icon.png');
          } else if (route.name === 'My Profile') {
            icon = require('../../assets/images/user-avatar-icon.png');
          }
          return {
            id: route.name,
            label: route.name,
            icon: icon,
          };
        });

        const activeTab = state.routes[state.index].name;

        const onTabPress = (tabId: string) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tabId,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(tabId);
          }
        };

        return (
          <BottomTabs tabs={tabs} activeTab={activeTab} onTabPress={onTabPress} />
        );
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Discover" component={Menu} />
      <Tab.Screen name="My Profile" component={MedicalPaper} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
