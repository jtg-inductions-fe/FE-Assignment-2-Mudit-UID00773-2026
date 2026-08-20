import { Outlet } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const Layout = () => {
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

export default Layout;
