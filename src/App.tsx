import Layout from 'layout/Layout';
import Boundary from 'pages/Boundary';
import Home from 'pages/Home';
import MyProfile from 'pages/MyProfile';
import UserProfile from 'pages/UserProfile';
import { Navigate, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/user" />} />

            <Route element={<Layout />}>
                <Route path="user">
                    <Route index element={<Home />} />
                    <Route path=":id" element={<UserProfile />} />
                </Route>

                <Route path="profile" element={<MyProfile />} />
            </Route>

            <Route path="/*" element={<Boundary />} />
        </Routes>
    );
};

export default App;
