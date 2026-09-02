export interface IUserProfileDetails {
    id: number;
    username: string;
    profileImage: string;
    html_url: string;
    name: string;
    bio: string | null;
    company: string | null;
    location: string | null;
    email: string | null;
    joined: string;
    public_repos: number;
    followers: number;
    following: number;
}
