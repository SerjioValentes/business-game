import React from 'react';
import {Button, TextField, Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import {apiGet, apiPost} from "../../api";
import {useForm} from "react-hook-form";

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

    interface Data {
        email: string;
        phone: string;
    }

const LogInPage = () => {

    const {handleSubmit, setValue, register} = useForm<Data>();

    const logIn = (data: Data) => {

        console.log(data)


        // apiPost({
        //     url: 'user/create',
        //     postData: data
        // }).then((res: any) => {
        //     console.log(res)
        //     if (res.error)
        //         return console.log(res.data)
        //     window.localStorage.setItem('token', res?.data?.access_token)
        //     window.localStorage.setItem('userRole', res?.data?.user?.role[0]?.role)
        // }).catch((e: any) => {
        //     console.log(e)
        // })
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

                    <Typography align={'center'} sx={{mb: 1}} variant={'h5'}>Log In</Typography>
                    <form onSubmit={handleSubmit(logIn)}>
                        <Box>
                            <TextField
                                {...register('email')}
                                fullWidth
                                label={'E-mail'}/>
                        </Box>

                        <Box>
                            <TextField
                                {...register('phone')}
                                fullWidth
                                label={'Phone number'}/>
                        </Box>

                        <Box sx={{display: 'flex', mx: 'auto'}}>
                            <Button type='submit' sx={{borderRadius: 2}} variant={'contained'}>LogIn</Button>
                        </Box>
                    </form>
                </div>
            </Box>
        </div>

    );
};

export default LogInPage;
