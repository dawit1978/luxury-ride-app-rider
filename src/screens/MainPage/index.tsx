import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import cabImg from '../../assets/l4.png';
import suvLR from '../../assets/lrsuv.png';
import foodLR from '../../assets/foodlr2.png';
import * as S from './styles';



const MainPage = () => {

const { navigate } = useNavigation();

  return (
    <S.Container>
      <ScrollView>
        <S.HeaderCard>
           <S.HeaderText>Looking for a luxurious and comfortable ride?</S.HeaderText>
          <S.comLR source={cabImg}  />
        </S.HeaderCard>

        <S.CardContainer>
          <S.CardButton onPress={() => navigate('DrawerNavigator')}>
           <S.suvLR source={suvLR}  />
            <S.CardText>Luxury Ride</S.CardText>
          </S.CardButton>

          <S.CardButton onPress={() => console.log('Food button pressed')}>
          <S.foodLR source={foodLR}  />

            <S.CardText>Food</S.CardText>
          </S.CardButton>
        </S.CardContainer>

        <S.Section>
          <S.SectionTitle>History</S.SectionTitle>
          <S.Item onPress={() => console.log('History item pressed')}>
            <S.ItemText>Recent Ride to Downtown</S.ItemText>
          </S.Item>
          <S.Item onPress={() => console.log('History item pressed')}>
            <S.ItemText>Recent Food Order from Pizza Place</S.ItemText>
          </S.Item>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Favorites</S.SectionTitle>
          <S.Item onPress={() => console.log('Favorites item pressed')}>
            <S.ItemText>Home</S.ItemText>
          </S.Item>
          <S.Item onPress={() => console.log('Favorites item pressed')}>
            <S.ItemText>Work</S.ItemText>
          </S.Item>
        </S.Section>
      </ScrollView>
    </S.Container>
  );
};

export default MainPage;
