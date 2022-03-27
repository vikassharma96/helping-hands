import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import colors from 'src/theme/colors';

const StyledMenuButton = styled(Button)({
  color: colors.tabColor,
  margin: '20px',
  '&:hover': {
    color: colors.themeColor,
    backgroundColor: colors.white,
  },
});

const LoginButton = styled(Button)({
  backgroundColor: colors.white,
  borderWidth: '1px',
  borderColor: colors.tabColor,
  color: colors.tabColor,
  margin: '20px',
  '&:hover': {
    borderColor: colors.tabColor,
    backgroundColor: colors.white,
  },
});

const SignUpButton = styled(Button)({
  backgroundColor: colors.themeColor,
  '&:hover': {
    backgroundColor: colors.themeColor,
  },
});

export { StyledMenuButton, LoginButton, SignUpButton };
