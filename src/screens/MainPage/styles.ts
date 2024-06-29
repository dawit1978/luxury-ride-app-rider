import styled from 'styled-components/native/';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ThemeProps } from '../../theme';
import { TouchableOpacity,Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const HeaderCard = styled.View`
  background-color: #f8f8f8;
  padding: 20px;
  margin: 50px 0 0 0px;
  border-radius: 10px;
  align-items: center;
  elevation: 2; /* For Android shadow */
  shadow-color: #000; /* For iOS shadow */
  shadow-offset: { width: 0, height: 2 }; /* For iOS shadow */
  shadow-opacity: 0.25; /* For iOS shadow */
  shadow-radius: 3.84px; /* For iOS shadow */
`;
export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #B80028;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const CardButton = styled.TouchableOpacity`
  background-color: #f8f8f8;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 45%;
  align-items: center;
  elevation: 2; /* For Android shadow */
  shadow-color: #000; /* For iOS shadow */
  shadow-offset: { width: 0, height: 2 }; /* For iOS shadow */
  shadow-opacity: 0.25; /* For iOS shadow */
  shadow-radius: 3.84px; /* For iOS shadow */
`;

export const CardText = styled.Text`
  color: #B80028;
  font-size: 18px;
  font-weight: bold;
`;

export const Section = styled.View`
  margin: 20px 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #B80028;
`;

export const Item = styled.TouchableOpacity`
  padding: 15px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  border-radius: 10px;
  elevation: 2; /* For Android shadow */
  shadow-color: #000; /* For iOS shadow */
  shadow-offset: { width: 0, height: 2 }; /* For iOS shadow */
  shadow-opacity: 0.25; /* For iOS shadow */
  shadow-radius: 3.84px; /* For iOS shadow */
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #333;
`;
export const comLR = styled.Image`
  height: 200px;
  width:400px;
  border-radius: 50px;
`;
export const suvLR = styled.Image`
  height: 50px;
  width:100px;
`;
export const foodLR = styled.Image`
  height: 50px;
  width:100px;
`;