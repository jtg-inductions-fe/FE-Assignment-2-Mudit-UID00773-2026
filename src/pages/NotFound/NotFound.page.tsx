import ErrorCard from 'components/ErrorCard/ErrorCard.component';

import notFoundImage from '@assets/images/404.png';

const NotFound = () => (
    <ErrorCard
        heading="404 Page Not Found"
        message="Could not Find the page you were looking for"
        imgPath={notFoundImage}
    />
);

export default NotFound;
