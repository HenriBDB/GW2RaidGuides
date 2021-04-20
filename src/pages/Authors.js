import React from "react";
import AuthorsView from '../components/Authors/AuthorsView';
import Seo from "../components/seo"

const Authors = () => {
    return (
        <>
            <Seo title="Creators" />
            <AuthorsView />
        </>
    )
}
export default Authors;