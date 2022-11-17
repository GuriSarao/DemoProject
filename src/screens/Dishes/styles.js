import { StyleSheet } from 'react-native'
import { WHITE_TRANSPERANT, WHITE, DARK_GRAY, MAIN_RED } from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
    },
    img:{
        width:200,
        height:170,
    },
    txt:{
        fontSize:20,
        color:DARK_GRAY,
        fontWeight:'500'
    },
    txtdark:{ fontSize:17,
        color:DARK_GRAY,
        fontWeight:'600'},
    btn :{
        backgroundColor:MAIN_RED
    }
})

export default styles