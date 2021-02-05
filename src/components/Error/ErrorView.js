import React from "react";
import {
    ErrorContainer,
    ErrorHeader,
    ErrorMessage,
    BackHome,
} from './styles'

const ErrorView = () => {

    return (
        <ErrorContainer>
            <ErrorHeader>404</ErrorHeader>
            <ErrorMessage>This is not the page you are looking for.</ErrorMessage>
            <BackHome href="/">Move along...</BackHome>
        </ErrorContainer>
    )
}
export default ErrorView;