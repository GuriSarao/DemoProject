
import * as React from 'react';
import {
  Text, View, StyleSheet, ScrollView, TouchableOpacity,
  Switch, SafeAreaView, Alert, Image
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {
  BLACK, FONT_SIZE_LARGE, FONT_WEIGHT_REGULAR,
  LIGHT_GRAY_10, MAIN_GRAY, MAIN_RED, WHITE
} from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import BottomTabs from '../bottomTabs';
import imagePaths from '../../theme/imagePaths';


const Drawer = createDrawerNavigator();

export default function DrawerScreen({ navigation, route }) {

  function CustomDrawerContent(props) {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const doLogout = () => {
      Alert.alert(
        'Alert!',
        'Are you sure, You want to logout?',
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "OK", onPress: () => alert('logout')
          }
        ]
      )

    }

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: MAIN_RED }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }} >
          <ScrollView>
            <View>
              <View style={styles.top}>
                <TouchableOpacity 
                  style={styles.pro} >
                  <Image source={imagePaths.burgerpic} style={styles.img} />
                  <Text style={styles.name}>{"Burger"}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingTop: 10 }}>
                <DrawerItemList {...props} />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.last}>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="BottomTabs"
        id="LeftDrawer"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: WHITE,
          // drawerItemStyle: { backgroundColor: MAIN_RED, }
          drawerLabelStyle: { color: MAIN_RED },
          useLegacyImplementation: false
        }}
      >
        <Drawer.Screen name="Home" component={BottomTabs} />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  signout: {
    color: WHITE,
    fontSize: FONT_SIZE_LARGE,
    fontWeight: FONT_WEIGHT_REGULAR
  },
  img: {
    width: 100,
    height: 100,
    borderRadius:50
  },
  last: {
    height: 50,
    backgroundColor: MAIN_RED,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }, top: {
    backgroundColor: MAIN_RED,
    height: 130,
    alignItems: "center",
    justifyContent: 'center'
  },
  pro: { alignItems: 'center', width: "100%" },
  name: {
    color: WHITE,
    lineHeight: 35,
    fontWeight: '500',
    letterSpacing: 0.6
  },
  second: {
    alignItems: "center",
    height: "16%",
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: MAIN_GRAY
  },
  disable: {
    color: BLACK,
    fontWeight: FONT_WEIGHT_REGULAR,
    marginRight: 10
  },
  iconview: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-around',
  },
  gallery: {
    width: 60,
    height: 60,
    borderRadius: 60
  }

})

