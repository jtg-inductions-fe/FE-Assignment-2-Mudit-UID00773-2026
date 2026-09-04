import { Divider, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import {
    InfoCard,
    InfoCardHeading,
    InfoCardIconContainer,
    InfoCardSection,
} from './UserProfileInfoCard.styles';

const UserProfileInfoCard = ({
    icon: Icon,
    heading,
    content,
}: {
    icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
        muiName: string;
    };
    heading: string;
    content: number;
}) => (
    <InfoCard elevation={3}>
        <InfoCardIconContainer>
            <Icon />
        </InfoCardIconContainer>
        <Divider orientation="vertical" variant="middle" flexItem />
        <InfoCardSection>
            <InfoCardHeading variant="h3" component="h2">
                {heading}
            </InfoCardHeading>
            <Typography>{content}</Typography>
        </InfoCardSection>
    </InfoCard>
);

export default UserProfileInfoCard;
