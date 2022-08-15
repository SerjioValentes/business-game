import React from 'react';
import {Button, TextField, Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const BoxWrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: 400
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: 400
    },
    [theme.breakpoints.between(0, 600)]: {
        minWidth: 300
    }
}))

const LogInPage = () => {
    return (
        <div>

        <Box
            sx={{
                p: 12,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.paper'
            }}
        >
            {/*<BoxWrapper>*/}
            <div>

                <Typography align={'center'} sx={{mb: 2}} variant={'h5'}>Log In</Typography>

                <Box>
                    <TextField
                        sx={{[`& fieldset`]: {
                                borderRadius: 2,
                            }}}
                        fullWidth label={'E-mail'}/>
                </Box>

                <Box sx={{my: 2}}>
                    <TextField sx={{[`& fieldset`]: {
                            borderRadius: 2,
                        }}}
                               fullWidth label={'Phone number'}/>
                </Box>

                <Box sx={{ display: 'flex', mx: 'auto'}}>
                    <Button sx={{borderRadius: 2}} variant={'contained'}>LogIn</Button>
                </Box>
            </div>
        </Box>
        </div>

    );
};

export default LogInPage;