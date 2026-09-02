import { ISearchUser, IUserInfo } from './userApiSlice.types';

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
