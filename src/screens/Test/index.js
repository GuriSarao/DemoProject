
import { View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import imagePaths from '../../theme/imagePaths';
import { ButtonGroup } from '@rneui/themed'
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';
import { MAIN_RED } from '../../theme';


function CreateRes() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [visible6, setVisible6] = useState(false);
    const userlist = [
        {
            name: 'Tikkaway',
            subtitle: 'amy.farha@gmail.com',
        },
        {
            name: 'Curry Kingdom',
            subtitle: 'cjackson@gmail.com',
        },
        {
            name: "Tikka 'n' Talk",
            subtitle: 'amandam@gmail.com',
        },
    ];
    const toggleDialog6 = () => {
        setVisible6(!visible6);
    };
    return (
        <View style={styles.container}>
            <Image source={imagePaths.burgerpic} style={styles.img} />
            <Text style={styles.txt}> Burger </Text>
            <Text style={[styles.txt, { fontSize: 16, fontWeight: '400' }]}> By MIZ Restaurant  </Text>
            <ButtonGroup
                buttons={['Bean burger', 'Veggie burger', 'Turkey burger']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                containerStyle={{ marginBottom: 20, }}
            />
            <Button
                title="Select Restaurant"
                onPress={toggleDialog6}
                buttonStyle={styles.btn}
            />
            <Dialog
                isVisible={visible6}
                onBackdropPress={toggleDialog6}
            >
                <Dialog.Title title="Choose Restaurant" />
                {userlist.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={{
                            marginHorizontal: -10,
                            borderRadius: 8,
                        }}
                        onPress={toggleDialog6}
                    >
                        <Avatar rounded source={imagePaths.burgerpic} />
                        <ListItem.Content>
                            <ListItem.Title style={{ fontWeight: '700' }}>
                                {l.name}
                            </ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </Dialog>
            <Button
                title="Submit"
                onPress={() => alert('submit')}
                buttonStyle={[styles.btn, { marginTop: 20 }]}
            />

        </View>
    );
}

export default CreateRes