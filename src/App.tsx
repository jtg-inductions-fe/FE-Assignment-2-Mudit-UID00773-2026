import Boundary from 'components/Boundary';
import Body from 'components/Cotainer';
import Home from 'components/Home';
import MyProfile from 'components/MyProfile';
import UserProfile from 'components/UserProfile';
import { Navigate, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const App = () => {
    return (
        <Routes>

            <Route path='/' element={<Navigate to="/user"/>} />

            <Route element={<Body />}>
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
