import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BABY_PINK, BABY_PINK_SHADE, DARK_BLUE, LIGHT_GRAY_110, MAIN_GRAY, MAIN_RED, WHITE } from '../../theme';
import CreateRes from '../../screens/Test';
import CreateDes from '../../screens/Dishes';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 17, color: WHITE },
                tabBarStyle: { backgroundColor: MAIN_RED },
                tabBarIndicatorStyle: { backgroundColor: WHITE }
            }}
        >
            <Tab.Screen name="Restaurant" component={CreateRes} />
            <Tab.Screen name="Dishes" component={CreateDes} />
        </Tab.Navigator>
    );
}