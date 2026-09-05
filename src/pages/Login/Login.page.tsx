import { useEffect } from 'react';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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
import { openSnackbar } from '@app/snackbar/snackbarSlice';

import {
    IconContainer,
    LoginCard,
    LoginContainer,
    LoginInput,
} from './Login.styles';

interface IFormInput {
    username: string;
    password: string;
}

const Login = () => {
    const theme = useTheme();

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state: { auth: { isAuthenticated: boolean } }) =>
            state.auth.isAuthenticated,
    );

    const [triggerLoginQuery, { isLoading }] = useLazyLoginQuery();

    const onSubmit: SubmitHandler<IFormInput> = async (inputData) => {
        const { username, password } = inputData;

        try {
            const response = await triggerLoginQuery(password).unwrap();

            if (response && response?.username !== username) {
                dispatch(
                    openSnackbar({
                        alertSeverity: 'error',
                        message: 'Invalid Username',
                    }),
                );
                return;
            }

            dispatch(setCredentials({ user: response, token: password }));
            dispatch(
                openSnackbar({
                    alertSeverity: 'success',
                    message: 'Successfully Logged in',
                }),
            );
        } catch (error) {
            let errorMessage = 'Something went worng';
            if (error && typeof error === 'object' && 'error' in error) {
                errorMessage = String(error?.error);
            }
            dispatch(
                openSnackbar({
                    alertSeverity: 'error',
                    message: errorMessage,
                }),
            );
        }
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: { username: '', password: '' },
    });

    useEffect(() => {
        if (isAuthenticated) {
            void navigate('/');
        }
    }, [navigate, isAuthenticated]);

    return (
        <>
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
                        onSubmit={(e) => void handleSubmit(onSubmit)(e)}
                        display="flex"
                        flexDirection="column"
                        gap={theme.typography.pxToRem(16)}
                        marginTop={theme.typography.pxToRem(28)}
                    >
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: 'Username is required' }}
                            render={({ field }) => (
                                <LoginInput
                                    {...field}
                                    label="Username"
                                    variant="outlined"
                                    error={Boolean(errors?.username)}
                                    helperText={
                                        errors?.username
                                            ? errors.username.message
                                            : ''
                                    }
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
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'Password is required' }}
                            render={({ field }) => (
                                <LoginInput
                                    {...field}
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    error={Boolean(errors?.password)}
                                    helperText={
                                        errors?.password
                                            ? errors.password.message
                                            : ''
                                    }
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
                            )}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Box>
                </LoginCard>
            </LoginContainer>
        </>
    );
};

export default Login;
