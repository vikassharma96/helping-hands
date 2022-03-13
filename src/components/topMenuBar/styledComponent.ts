import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

const StyledMenuButton = styled(Button)({
  color: COLORS.TAB_COLOR,
  margin: '20px',
  '&:hover': {
    color: COLORS.THEME_COLOR,
    backgroundColor: COLORS.WHITE_COLOR,
  },
});

const LoginButton = styled(Button)({
  backgroundColor: COLORS.WHITE_COLOR,
  borderWidth: '1px',
  borderColor: COLORS.TAB_COLOR,
  color: COLORS.TAB_COLOR,
  margin: '20px',
  '&:hover': {
    borderColor: COLORS.TAB_COLOR,
    backgroundColor: COLORS.WHITE_COLOR,
  },
});

const SignUpButton = styled(Button)({
  backgroundColor: COLORS.THEME_COLOR,
  '&:hover': {
    backgroundColor: COLORS.THEME_COLOR,
  },
});

export { StyledMenuButton, LoginButton, SignUpButton };
