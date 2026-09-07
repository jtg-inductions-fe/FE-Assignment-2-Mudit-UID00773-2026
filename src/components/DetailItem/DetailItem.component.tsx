import { SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { UserProfileData } from './DetailItem.styles';

const DetailItem = ({
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

export default DetailItem;
