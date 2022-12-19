import { Button, ListCompanyCard, List } from "../../src/components";
import { useTestState } from "../../src/module/test/state";
import { IJobs, IServerSideProps } from "../../src/module/test/types";
import styled from "styled-components";


import * as S from "../../src/module/test/styles";

const FooterStyled = styled.div`
    display: flex;
    align-items: center;
    place-content: center;
    margin: 10rem 0;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;

export default function Jobs({ jobsData }: IJobs) {
    const {
        jobs,
        companies,
        isLastSevenDays,
        isActiveCompany,
        getByCompanyName,
        handleActiveCompany,
        handleGetJobsByCompanyName,
        handleGetJobsByLastSevenDays,
    } = useTestState({ jobsData });

    return (
        <>
            <S.Container>
                <S.Title>Carousel of Jobs</S.Title>
                <Button
                    marginBottom={20}
                    active={getByCompanyName}
                    label="Get by company name"
                    onClick={handleGetJobsByCompanyName}
                />
                <ListCompanyCard
                    companies={companies}
                    isActiveCompany={isActiveCompany}
                    getByCompanyName={getByCompanyName}
                    handleActiveCompany={handleActiveCompany}
                />
                <Button
                    marginBottom={20}
                    label="Last 7 days"
                    active={isLastSevenDays}
                    onClick={handleGetJobsByLastSevenDays}
                />
                <List jobs={jobs} />
            </S.Container>
            <FooterStyled>
                Development by Beno Lopes Dias
            </FooterStyled>
        </>


    );
}

export async function getServerSideProps({ res }: IServerSideProps) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );

    const response = await fetch(
        "https://zippia-test-job-app.vercel.app/api/jobs"
    );
    const jobsData = await response.json();

    return { props: { jobsData } };
}
