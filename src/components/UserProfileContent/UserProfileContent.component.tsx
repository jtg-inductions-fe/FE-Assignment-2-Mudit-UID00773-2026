import { SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { UserProfileData } from './UserProfileContent.styles';

const UserProfileContent = ({
    icon: Icon,
    content,
}: {
    icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
        muiName: string;
    };
    content: string;
}) => (
    <UserProfileData>
        <Icon />
        <Typography>{content}</Typography>
    </UserProfileData>
);

export default UserProfileContent;
