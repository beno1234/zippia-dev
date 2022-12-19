import { IList } from "./types";
import { Card } from "../card";
import Carousel from "nuka-carousel";


import * as S from "./styles";

export const List = ({ jobs = [] }: IList) => {
    return (

        //Card carousel
        <S.List>
            <Carousel slidesToShow={1} cellSpacing={1} autoplay={true}>
                {jobs?.map(
                    ({
                        jobId,
                        jobTitle,
                        postedDate,
                        companyName,
                        jobDescription,
                    }) => (
                        <Card
                            key={jobId}
                            title={jobTitle}
                            subTitle={companyName}
                            postedDate={postedDate}
                            description={jobDescription}
                        />
                    )
                )}
            </Carousel>
        </S.List>
    );
};
