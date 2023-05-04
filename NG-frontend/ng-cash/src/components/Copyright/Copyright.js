import Typography from '@mui/material/Typography';
import { Font } from './styled';

export function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Font>
                NG.CASH/
                {new Date().getFullYear()}
            </Font>
            {'Copyright © '}

        </Typography>
    );
}
