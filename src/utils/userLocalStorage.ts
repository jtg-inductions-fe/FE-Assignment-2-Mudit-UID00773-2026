import { IUserProfileDetails } from '@pages';

export const getUserFromLocalStorage = (): IUserProfileDetails | null => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? (JSON.parse(storedUser) as IUserProfileDetails) : null;
};

export const setUserToLocalStorage = (user: IUserProfileDetails): void => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = (): void => {
    localStorage.removeItem('user');
};

export const getTokenFromLocalStorage = (): string | null =>
    localStorage.getItem('token');

export const setTokenToLocalStorage = (token: string): void => {
    localStorage.setItem('token', token);
};

export const removeTokenFromLocalStorage = (): void => {
    localStorage.removeItem('token');
};
