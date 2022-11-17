

import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image, StatusBar } from 'react-native';
import styles from './styles';
import { Header } from '../../components/Header';
import imagePaths from '../../theme/imagePaths';
import { MAIN_RED } from '../../theme';
import { DATA } from '../../components/dummy';
import { FAB } from '@rneui/themed';



function HomeScreen({ navigation }) {

    const [open, setOpen] = React.useState(true);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.list}>
                <Image source={imagePaths.burgerpic} style={styles.imgs} />
                <Text style={[styles.txt, { fontSize: 14 }]}> {item.title} </Text>
            </View>

        )
    }
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={MAIN_RED} />
            <View style={styles.container}>
                <Header leftIcon onBackPress={()=> navigation.toggleDrawer()}/>
                <View style={styles.view}>
                    <Text style={styles.txt}> Resturant </Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        ItemSeparatorComponent={() => <View style={{ height: 7 }} />}
                        contentContainerStyle={{ paddingTop: 10, paddingBottom: 50 }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.speed}>
                    <FAB
                        visible={open}
                        icon={{ name: 'add', color: 'white' }}
                        color={MAIN_RED}
                    />
                </View>
            </View>
        </>
    );
}

export default HomeScreen