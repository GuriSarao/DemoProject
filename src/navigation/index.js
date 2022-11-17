import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Test from '../screens/Test';
import BottomTabs from './bottomTabs';
import DrawerScreen from './Drawer/DrawerScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerScreen' screenOptions={{ headerShown: false }} >
                <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
export default MainNavigation

