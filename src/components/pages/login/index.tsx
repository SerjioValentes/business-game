import React from 'react';
import {Button, TextField, Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import {apiGet, apiPost} from "../../api";

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
    type Data = {
        email: string;
        phone: string;
    }

    const data: Data = {
        email: 'admin@admin.com',
        phone: '89872774813'
    }

    const logIn = () => {
    apiPost({
        url: 'user/create',
        postData: data
    }).then((res: any) => {
        console.log(res)
    }).catch((e: any) => {
        console.log(e)
    })
    }

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
                    <Button onClick={logIn} sx={{borderRadius: 2}} variant={'contained'}>LogIn</Button>
                </Box>
            </div>
        </Box>
        </div>

    );
};

export default LogInPage;