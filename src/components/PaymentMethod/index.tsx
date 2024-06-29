import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import cabImg from '../../assets/welcome.png';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
 const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;
 const CabImg = styled.Image`
  // bottom: -35%;
  height: ${hp('50%')}px;
`;

const Button = styled.TouchableOpacity`
  background-color: #B80028;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const FormSection = styled.View`
  margin-top: 20px;
  width: 100%;
`;

const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const PaymentMethodComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <Container>
      <TopArea>
        <CabImg source={cabImg} resizeMode="cover" />
      </TopArea>
      <Text>Select Payment Method:</Text>
      <Button onPress={() => handlePaymentMethodChange('cash')}>
        <ButtonText>Cash</ButtonText>
      </Button>
      <Button onPress={() => handlePaymentMethodChange('telebirr')}>
        <ButtonText>Telebirr</ButtonText>
      </Button>
      <Button onPress={() => navigate('DrawerNavigator')}>Add Card</Button>

      {paymentMethod === 'telebirr' && (
        <FormSection>
          <Label>Telebirr Phone Number:</Label>
          <Input placeholder="Enter phone number" keyboardType="phone-pad" />
          <Label>Amount:</Label>
          <Input placeholder="Enter amount" keyboardType="numeric" />
        </FormSection>
      )}

    </Container>
  );
};

export default PaymentMethodComponent;
