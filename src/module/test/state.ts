import { useCallback, useEffect, useState } from "react";
import { IJob } from "../../types";
import { IUseTestState } from "./types";

import moment from "moment";
// creating a state to list the companies, and listing with the date up to 7 days (from a specific company or not)
export const useTestState = ({ jobsData }: IUseTestState) => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [companies, setCompanies] = useState<string[]>([]);
    const [activeCompanies, setActiveCompanies] = useState<string[]>([]);
    const [getByCompanyName, setGetByCompanyName] = useState(false);
    const [isLastSevenDays, setIsLastSevenDays] = useState(false);

    const handleGetJobs = useCallback(() => {
        setJobs(jobsData?.jobs || []);
    }, [jobsData]);

    const handleGetCompanies = useCallback(() => {
        const companies = jobs
            .map(({ companyName = "" }) => companyName)
            .filter((companyName, index, self) => self.indexOf(companyName) == index);

        setCompanies(companies);
    }, [jobs]);

    const handleGetJobsByLastSevenDays = () => {
        setIsLastSevenDays((prevState) => !prevState);
    };

    const handleGetJobsByCompanyName = () => {
        setGetByCompanyName((prevState) => !prevState);
    };

    const handleClearSelectedCompanies = () => {
        setActiveCompanies([]);
    };

    const handleActiveCompany = (companyName = "") => {
        if (activeCompanies.includes(companyName)) {
            setActiveCompanies((prevState) =>
                prevState.filter(
                    (existingCompanyName) => existingCompanyName !== companyName
                )
            );
        } else {
            setActiveCompanies((prevState) => [companyName, ...prevState]);
        }
    };

    const isActiveCompany = (companyName = "") => {
        return activeCompanies.includes(companyName);
    };

    const getPassedDays = (postingDate = "") => {
        const given = moment(postingDate, "YYYY-MM-DD");
        const current = moment().startOf("day");

        return moment.duration(current.diff(given)).asDays();
    };

    const getFilteredJobs = () => {
        return jobs.filter(({ companyName = "", postingDate = "" }) => {
            if (
                getByCompanyName &&
                activeCompanies?.length &&
                !activeCompanies.includes(companyName)
            )
                return false;

            if (isLastSevenDays && getPassedDays(postingDate) > 7) return false;

            return true;
        });
    };

    useEffect(() => {
        handleGetJobs();
    }, [jobsData, handleGetJobs]);

    useEffect(() => {
        if (!getByCompanyName) handleClearSelectedCompanies();
    }, [getByCompanyName]);

    useEffect(() => {
        handleGetCompanies();
    }, [jobs, handleGetCompanies]);

    return {
        companies,
        isActiveCompany,
        isLastSevenDays,
        getByCompanyName,
        handleActiveCompany,
        jobs: getFilteredJobs(),
        handleGetJobsByCompanyName,
        handleGetJobsByLastSevenDays,
    };
};
