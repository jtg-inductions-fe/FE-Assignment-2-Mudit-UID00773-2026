import { Outlet } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const Body = () => {
    return (
        <>
            <header>
                <nav>Header</nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Body;
