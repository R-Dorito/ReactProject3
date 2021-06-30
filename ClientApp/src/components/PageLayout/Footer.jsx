import React from "react";
import { FooterContainer, FooterGridContainer, FooterGridItem1, FooterGridItem2, FooterGridItem3 } from "./StyledLayout";

export function Footer() {
    return (
        <FooterContainer>
            I am a footer, I am at the bottom
            <FooterGridContainer>
                <FooterGridItem1>Title of Footer</FooterGridItem1>
                <FooterGridItem2>Info</FooterGridItem2>
                <FooterGridItem3>Link Up</FooterGridItem3>
            </FooterGridContainer>
            ;
        </FooterContainer>
    );
    // Want to add in a grid to this
}
