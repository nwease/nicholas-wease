import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)

        return React.createElement
    }
}

export default function PageRender () {
    const {
        params: { page }
    } = useRouteMatch()

    return generatePage(page)
}
