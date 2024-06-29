import { View, TextInput, } from 'react-native';
import { TouchableOpacity,Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007BFF;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const FormSection = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;