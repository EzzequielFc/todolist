import styled from 'styled-components/native';

import {COLORS} from '../../../assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.GRAY_500};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Line = styled.View`
  height: 2px;
  background-color: ${COLORS.GRAY_400};
  margin-bottom: 20px;
`;
