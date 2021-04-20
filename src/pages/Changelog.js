import React from "react";
import ChangelogView from '../components/Changelog/ChangelogView';
import Seo from "../components/seo"

const Changelog = () => {
    return (
        <>
            <Seo title="Changelog" />
            <ChangelogView />
        </>
    )
}
export default Changelog;