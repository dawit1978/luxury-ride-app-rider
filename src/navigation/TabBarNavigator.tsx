import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from '../screens/Home';
import RideHistory from '../screens/RideHistory';
import Wallet from '../screens/Wallet';
import Share from '../screens/Share';
import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/FontAwesome';
import RHistory from 'react-native-vector-icons/FontAwesome';
import { TabBarParamsList } from '../../types';

interface TabsProps {
}


const TabBar = createMaterialBottomTabNavigator<TabBarParamsList>();
const TabBarNavigator: React.FC<TabsProps> = ({ }) => {
  return (
    <TabBar.Navigator
      barStyle={{
        justifyContent:"center",
        alignItems: "center"

      }}
      initialRouteName= {"Home"}
      screenOptions={{
        tabBarColor:"white",

      }}
      
      activeColor={"#B80028"}
      inactiveColor={"grey"}
    >
      <TabBar.Screen
        name="Home"
        component={Home}
        options={
          {
          title:"Home",
          tabBarIcon: ({color})=>(
            <EIcon name="home" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="RideHistory"
        component={RideHistory}
        options={
          {
          title:"RideHistory",
          tabBarIcon: ({color})=>(
            <RHistory name="history" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="Wallet"
        component={Wallet}
        options={
          {
          title:"notifications",
          tabBarIcon: ({color})=>(
            <Icon name="notifications" color={color} size={26} />
          )
          }
        }
      />
      <TabBar.Screen
        name="Share"
        component={Share}
        options={
          {
          title:"profile",
          tabBarIcon: ({color})=>(
            <FIcon name="user" color={color} size={26} />
          )
          }
        }
      />
    
    
    </TabBar.Navigator>
  )
}

export default TabBarNavigator