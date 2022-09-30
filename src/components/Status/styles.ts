import styled from 'styled-components/native';
import {COLORS} from '../../../assets/colors';

export const Container = styled.View`
  height: 56px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Separator = styled.View`
  flex-direction: row;
`;

export const LabelCreate = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.BLUE};
`;

export const LabelComplet = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.PURPLE};
`;

export const Counter = styled.View`
  width: 25px;
  height: 19px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GRAY_400};
  border-radius: 999px;
  margin-left: 10px;
`;

export const LabelCounter = styled.Text`
  font-size: 12px;
  color: '#FFF';
`;
