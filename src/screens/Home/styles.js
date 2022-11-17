import { StyleSheet } from 'react-native'
import { WHITE_TRANSPERANT, WHITE, DARK_GRAY, MAIN_RED } from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    txt: {
        fontSize: 20,
        color: DARK_GRAY
    },
    view: {
        marginTop: 20
    },
    imgs: {
        width: 170,
        height: 150
    },
    list: {
        alignItems: 'center',
        margin: 6,
        elevation: 2,
        backgroundColor: WHITE,
        borderRadius: 10,
    },
    speed: {
        position: 'absolute', bottom: 20, right: 20,
    }

})

export default styles