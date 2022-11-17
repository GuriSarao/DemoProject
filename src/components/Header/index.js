import React from 'react';
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { MAIN_GRAY, MAIN_RED, WHITE } from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import imagePaths from '../../theme/imagePaths';


export const Header = ({ onBackPress, title, leftIcon, rightIcon }) => {
  return (
    <>
      <LinearGradient colors={[MAIN_RED, MAIN_GRAY]} style={styles.header}>
        {leftIcon ? (
          <TouchableOpacity onPress={onBackPress}>
            <Image source={imagePaths.burgerpic} style={styles.img} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onBackPress}>
            <Ionicons name='chevron-back' color={WHITE} size={30} />
          </TouchableOpacity>
        )}
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.headerTitle}>{"Good morning"}</Text>
          <Text style={[styles.headerTitle, { fontSize: 20 }]}>{"John smith"}</Text>
        </View>

        {rightIcon ? (
          <TouchableOpacity>{rightIcon}</TouchableOpacity>
        ) : (
          <View style={{ width: 20 }} />
        )}

      </LinearGradient>
    </>
  );
};
