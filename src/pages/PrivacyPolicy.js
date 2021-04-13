import React from "react";
import PrivacyPolicyView from '../components/PrivacyPolicy/PrivacyPolicyView';
import Seo from "../components/seo"

const PrivacyPolicy = () => {
    return (
        <>
            <Seo title="Privacy Policy" />
            <PrivacyPolicyView />
        </>
    )
}
export default PrivacyPolicy;