import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Props, TabBarParamsList } from '../types'
// interface Props{

// }

const Support:React.FC<Props<TabBarParamsList,'Support'>> = () => {
  
  return (
    <View style={styles.container}>
      <Text>group chat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
export default Support