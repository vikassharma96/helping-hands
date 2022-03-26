import { styled } from '@mui/material/styles';
import { Box, Container, Link, Typography } from '@mui/material';
import colors from 'src/theme/colors';
import footerBg from '../../assets/images/footerBg.jpg';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const BoxFooter = styled(Box)<{
  component: string;
}>({
  marginTop: 'auto',
  backgroundImage: `url(${footerBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const BoxContainer = styled(Box)<{
  component: string;
}>(({ theme }) => ({
  marginTop: 'auto',
  paddingBottom: 20,
  backgroundSize: 'cover',
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.8)'
      : theme.palette.grey[800],
  backgroundRepeat: 'no-repeat',
}));

const StyledContainer = styled(Container)<{
  component: string;
}>(({ theme }) => ({
  paddingTop: 30,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const StyledTypography = styled(Typography)({
  color: colors.white,
  gutterBottom: true,
});

const StyledUL = styled('ul')({
  paddingTop: 12,
  listStyleType: 'none',
  paddingLeft: '0rem',
});

const StyledLI = styled('li')({
  paddingTop: 12,
});

const StyledLink = styled(Link)({
  color: colors.footerText,
  textDecoration: 'none',
});

export {
  StyledBox,
  BoxFooter,
  BoxContainer,
  StyledContainer,
  StyledTypography,
  StyledUL,
  StyledLI,
  StyledLink,
};
