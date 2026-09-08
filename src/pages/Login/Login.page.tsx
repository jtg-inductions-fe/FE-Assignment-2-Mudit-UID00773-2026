import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    Box,
    Button,
    InputAdornment,
    Typography,
    useTheme,
} from '@mui/material';

import { useValidateUser } from '@hooks';

import {
    IconContainer,
    LoginCard,
    LoginContainer,
    LoginInput,
} from './Login.styles';
import { IFormInput } from './Login.types';

const Login = () => {
    const theme = useTheme();
    const { isLoading, onLoginSubmit } = useValidateUser();

    const [viewPassword, setViewPassword] = useState(false);

    const toggleViewPassword = () => setViewPassword((prev) => !prev);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: { username: '', password: '' },
    });

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
                            Login
                        </Typography>
                        <Typography
                            component="p"
                            marginTop={theme.typography.pxToRem(12)}
                        >
                            Ready to get started? Log in below
                        </Typography>
                    </Box>

                    <Box
                        component="form"
                        onSubmit={(e) => void handleSubmit(onLoginSubmit)(e)}
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
                                    type={viewPassword ? 'text' : 'password'}
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
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {viewPassword ? (
                                                        <VisibilityOffIcon
                                                            cursor="pointer"
                                                            onClick={
                                                                toggleViewPassword
                                                            }
                                                        />
                                                    ) : (
                                                        <VisibilityIcon
                                                            cursor="pointer"
                                                            onClick={
                                                                toggleViewPassword
                                                            }
                                                        />
                                                    )}
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
