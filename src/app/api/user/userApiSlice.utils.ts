import { IUserProfileDetails } from 'pages/UserProfile/userProfile.types';

import { IUserInfo } from '@components';

import { ISearchUser, IUser } from './userApiSlice.types';

export const transformUserData = (responseData: ISearchUser[]): IUserInfo[] => {
    const userData: IUserInfo[] = [];

    responseData.map((item) => {
        const newItem: IUserInfo = {
            username: item.login,
            profileImage: item.avatar_url,
            url: item.url,
            id: item.id,
        };
        userData.push(newItem);
    });

    return userData;
};

export const transformUserProfileData = (
    responseData: IUser,
): IUserProfileDetails => ({
    id: responseData.id,
    username: responseData.login,
    profileImage: responseData.avatar_url,
    html_url: responseData.html_url,
    name: responseData.name,
    bio: responseData.bio,
    company: responseData.company,
    location: responseData.location,
    email: responseData.email,
    joined: responseData.created_at,
    public_repos: responseData.public_repos,
    followers: responseData.followers,
    following: responseData.following,
});
