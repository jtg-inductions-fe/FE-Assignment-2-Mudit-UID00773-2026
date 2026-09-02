import { FormEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {
    Box,
    Button,
    InputAdornment,
    Typography,
    useTheme,
} from '@mui/material';

import { useLazyLoginQuery } from '@app/api/auth/authApiSlice';
import { setCredentials } from '@app/auth/authSlice';

import {
    IconContainer,
    LoginCard,
    LoginContainer,
    LoginInput,
} from './Login.styles';

const Login = () => {
    const theme = useTheme();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state: { auth: { isAuthenticated: boolean } }) =>
            state.auth.isAuthenticated,
    );

    const [triggerLoginQuery, { data }] = useLazyLoginQuery();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [usernameError, setUsernameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username.trim().length === 0) {
            setUsernameError('Username cannot be empty');
        } else {
            setUsernameError('');
        }

        if (password.trim().length === 0) {
            setPasswordError('Password cannot be empty');
        } else {
            setPasswordError('');
        }

        await triggerLoginQuery({ token: password });

        if (data?.login !== username) {
            throw Error('Invalid username or password');
        }

        dispatch(setCredentials({ user: data, token: password }));
    };

    useEffect(() => {
        if (isAuthenticated) {
            void navigate('/profile');
        }
    }, [isAuthenticated]);

    return (
        <LoginContainer>
            <LoginCard elevation={4}>
                <Box>
                    <IconContainer>
                        <PersonIcon color="primary" />
                    </IconContainer>
                </Box>
                <Box>
                    <Typography
                        variant="h3"
                        component="h1"
                        fontSize={theme.typography.pxToRem(24)}
                        fontWeight="bold"
                    >
                        Login Page
                    </Typography>
                    <Typography
                        component="p"
                        marginTop={theme.typography.pxToRem(12)}
                    >
                        Login to get more features
                    </Typography>
                </Box>
                <Box
                    component="form"
                    onSubmit={(e) => {
                        void handleSubmit(e);
                    }}
                    marginTop={theme.typography.pxToRem(28)}
                    display="flex"
                    flexDirection="column"
                    gap={theme.typography.pxToRem(16)}
                >
                    <LoginInput
                        label="Username"
                        variant="outlined"
                        // required
                        value={username}
                        error={Boolean(usernameError)}
                        helperText={usernameError}
                        onChange={(e) => setUsername(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <LoginInput
                        label="Password"
                        variant="outlined"
                        // required
                        value={password}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <Button type="submit" variant="contained" fullWidth>
                        Login
                    </Button>
                </Box>
            </LoginCard>
        </LoginContainer>
    );
};

export default Login;
