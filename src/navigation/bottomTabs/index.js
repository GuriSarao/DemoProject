import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import Test from '../../screens/Test';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAIN_GRAY, MAIN_RED } from '../../theme';
import TopTabs from '../TopTabs';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Restaurant') {
                        iconName = focused
                            ? 'restaurant'
                            : 'restaurant';
                    } else if (route.name === 'Data') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: MAIN_RED,
                tabBarInactiveTintColor: MAIN_GRAY,
                headerShown: false
            })}
        >
            <Tab.Screen name="Restaurant" component={HomeScreen} />
            <Tab.Screen name="Data" component={TopTabs} />
        </Tab.Navigator>
    );
}

