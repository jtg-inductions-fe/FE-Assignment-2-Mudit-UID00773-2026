import { Divider, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import {
    InfoCardContainer,
    InfoCardHeading,
    InfoCardIconContainer,
    InfoCardSection,
} from './InfoCard.styles';

const InfoCard = ({
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
    <InfoCardContainer elevation={3}>
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
    </InfoCardContainer>
);

export default InfoCard;
