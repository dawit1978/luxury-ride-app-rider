import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabBarProps, TabBarParamsList } from '../../types'
// import ShareItem, { Props } from '../components/ShareItem'
// import {items} from "../util/Data"
// interface Props{

// }

const Share: React.FC<TabBarProps<TabBarParamsList, 'Share'>> = () => {
  // const [item, setItem] = useState<Props>();
  // useEffect(() => {
   
  //   setItem(items[0])
  // }, [])

  return (
    <View style={styles.container}>
      {/* <ShareItem {...items[0]} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Share