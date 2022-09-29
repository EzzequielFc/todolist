import styled from "styled-components/native";

import { COLORS } from "../../../assets/colors";

import { TextInput } from "react-native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: center;
    top: -25px;
`;

export const InputAssignment = styled.TextInput`
    width: 271px;
    height: 52px;
    background-color: ${COLORS.GRAY_400};
    border: 1px solid ${COLORS.GRAY_700};
    border-radius: 6px;
    padding-left: 20px;
`;

export const Button = styled.TouchableOpacity`
    margin-left: 5px;
    width: 52px;
    height: 52px;
    background-color: ${COLORS.BLUE_DARK};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.Image`
    
`;