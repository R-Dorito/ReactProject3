import React, { useEffect, useState } from "react";
import { CachePolicies, useFetch } from "use-http";

import {
    PageBody,
    TitleContainer,
    TitleHeader,
    TitleSub,
    PageImage,
    Content,
    ContentParagraph,
} from "./StyledContentDisplayPage.jsx";
import stockImage from "../../../src/Images/stockImage.jpg";

interface WebContent {
    id?: string;
    title: string;
    content: string;
}

export const ChickenPage = () => {
    const { get, post, response, loading, error } = useFetch(
        "http://localhost:5000/api/WebContent",
        {
            mode: "no-cors",
            cachePolicy: CachePolicies.NO_CACHE,
        }
    );

    const [contentItems, setContentItems] = useState<WebContent[]>([]);

    async function loadData() {
        await get("/").then((loadedData) => setContentItems(loadedData));
    }

    useEffect(() => {
        loadData();
    }, []);

    const newKebab: WebContent = {
        title: "test",
        content: "contest",
    };

    return (
        <PageBody>
            <TitleContainer>
                <TitleHeader>Making Saurkraut</TitleHeader>
                <TitleSub>
                    A page about Saurkraut, Begin writing 28/06/2021
                </TitleSub>
                <PageImage src={stockImage} alt="this is temporary" />
            </TitleContainer>

            <Content>
                <ContentParagraph>
                    <button
                        onClick={() => {
                            post("", newKebab);
                        }}
                    >
                        Add new thing
                    </button>
                    {contentItems.map((item) => (
                        <div>{item.title}</div>
                    ))}
                </ContentParagraph>
            </Content>
        </PageBody>
    );
};

/*
 *            <button
                onClick={() =>
                    get().then((data) => {
                        setContentItems({
                            title: data.title,
                            content: data.content,
                        });
                    })
                }
            >
                kebeabs
            </button>
 *
 * <Content style={{ display: "none" }}>
                <ContentParagraph>
                    When I make my saurkraut, I like to think about this story I
                    have read a little while ago about e-coli. The story is
                    about a long term experiment to observe the evolution of
                    e-coli and how it can adapt with each generation. The people
                    running the tests would begin with a group of 20 glasses
                    with e-coli. Each day, the people would take a sample of the
                    each e-coli and put it into a new glass, creating a second
                    generation. They would do this every day for the next
                    several years, creating long families of the e-coli strain.
                </ContentParagraph>
                <ContentParagraph>
                    Whenever I create a new jar of saurkraut, I like to take
                    some of the bacteria from another jar and adding it into a
                    new one. I wonder what types of strains I will get, I can't
                    observe the effects of the bacteria but I do wonder what is
                    happening.
                </ContentParagraph>
            </Content>
 * 
*/
export function LambPage() {
    return (
        <>
            <TitleHeader>Lamb Page</TitleHeader>
        </>
    );
}
