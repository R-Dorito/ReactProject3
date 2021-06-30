import styled from "styled-components";
import React from "react";

export const TitleContainer = styled.div``;

export const PageBody = styled.div`
    max-width: 1000px;
    margin: auto;
`;
export const PageImage = styled.img`
    width: 500px;
    margin: 2.5px auto;
    display: flex;
    transition: width 0.2s, margin 0.2s;
    &:hover {
        width: 505px;
        margin: 0px auto;
    }
`;

export const TitleHeader = styled.h1`
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    color: #000000;
`;
export const TitleSub = styled(TitleHeader)`
    font-size: 12px;
    color: #2e2e2e;
`;

export const Content = styled.div`
    margin: 0px auto;
`;

export const ContentParagraph = styled.p`
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.75;
    font-size: 18px;
    text-align: justify;
`;
