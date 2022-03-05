import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledMenuButton = styled(Button)({
  color: 'green',
  margin: '20px',
  '&:hover': {
    backgroundColor: 'green',
    color: 'white',
  },
});

export { StyledMenuButton };
