import { ErrorCard } from 'components';
import { useRouteError } from 'react-router-dom';

import image from '@assets/images/error.png';

const ErrorBoundary = () => {
    const error = useRouteError();

    let errorMessage = 'An unexpected runtime error occurred.';

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (
        typeof error === 'object' &&
        error !== null &&
        'statusText' in error
    ) {
        errorMessage = (error as { statusText: string }).statusText;
    }
    return (
        <ErrorCard
            heading="Application error"
            message={errorMessage}
            imgPath={image}
        />
    );
};

export default ErrorBoundary;
