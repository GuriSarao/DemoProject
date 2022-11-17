import { StyleSheet } from 'react-native'
import {
  WHITE,
  FONT_WEIGHT_REGULAR,
} from '../../theme'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 20,
    width:"100%",
    borderRadius:30,
    marginTop:10
  },

  headerTitle: {
    letterSpacing: 0.5,
    color: WHITE,
    fontWeight:FONT_WEIGHT_REGULAR,
    fontSize:14
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50
},
})

export default styles
