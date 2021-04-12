import React from 'react'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const Seo = ({ title, description, path }) => {

    const url = `https://gw2-raid-guides.web.app/${path}`

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={`${title} | Gw2 Raid Guides`}
            meta={[
                {
                    name: 'description',
                    content: description,
                },
            ]}
            links={[
                {
                    rel: 'canonical',
                    href: url,
                },
            ]}
        />
    );
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}
export default Seo;