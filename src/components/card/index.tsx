import { ICard } from "./types";
import { getShortDescription } from "./util";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import * as S from "./styles";
import { Pagination } from "swiper";
import dynamic from "next/dynamic";

// card styling and data presentation

export const Card = ({
    description = "",
    subTitle,
    title,
    postedDate,
}: ICard) => {
    return (
        <S.Card>
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Subtitle>{subTitle}</S.Subtitle>
                <S.Description
                    dangerouslySetInnerHTML={{ __html: getShortDescription(description) }} />
                <S.Separator>
                    <S.CardPostedDate>{postedDate}</S.CardPostedDate>
                </S.Separator>
            </S.Content>
        </S.Card>
    );
};
