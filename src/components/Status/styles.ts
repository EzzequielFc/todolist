import styled from "styled-components/native";

import { COLORS } from "../../../assets/colors";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 24px;
    padding-right: 24px;
`;

export const Separator = styled.View`
    flex-direction: row;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: bold;
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

export const TextCounter = styled.Text`
    font-size: 12px;
    color: '#FFF';
`;