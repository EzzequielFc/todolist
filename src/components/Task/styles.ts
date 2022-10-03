import styled from 'styled-components/native';

import {COLORS} from '../../../assets/colors';

type LabelTaskProps = {
  selected: boolean
}

export const Container = styled.View`
  background-color: ${COLORS.GRAY_400};
  flex-direction: row;
  padding: 16px 0;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin: 0 10px;
`;
export const Icon = styled.Image``;
export const LabelTask = styled.Text<LabelTaskProps>`
  flex: 1;
  text-align: justify;
  text-decoration: ${props => props.selected? 'line-through': 'none'};
  color: ${props => props.selected? COLORS.GRAY_200 : COLORS.GRAY_500};
`;
