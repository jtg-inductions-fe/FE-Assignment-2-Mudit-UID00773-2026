import { ErrorCard } from 'components';
import { useRouteError } from 'react-router-dom';

import image from '@assets/images/error.png';
import { useGetErrorMessage } from '@hooks';

const ErrorBoundary = () => {
    const error = useRouteError();

    const { errorMessage } = useGetErrorMessage(error);
    return (
        <ErrorCard
            heading="Application error"
            message={errorMessage}
            imgPath={image}
        />
    );
};

export default ErrorBoundary;
