import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TabBarProps, TabBarParamsList } from '../../types'
// import New from "../components/New"
// import {news} from '../util/Data';

// interface Props{

// }

const RideHistory:React.FC<TabBarProps<TabBarParamsList,'RideHistory'>> = () => {
  
  return (
 <View style={styles.mainContainer}>
      {/* <New {...news[0]}/> */}
 </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default RideHistory