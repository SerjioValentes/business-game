import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {AppBar, Box, Button, Divider, MenuItem, TextField, useTheme} from "@mui/material";
import MyLife from "../../common/components/myLife";


const HomeDrawer = ({children}: any) => {
    const theme = useTheme();


    return (


        <Box sx={{display: 'flex'}}>
            <AppBar
                elevation={0}
                position="fixed"
            >
                    <MyLife/>
            </AppBar>

            {/*<DrawerHeader sx={{display: 'flex', justifyContent: 'space-between', background: '#ffb300'}}>*/}
            {/*    <img className='img-logo' src={logo} alt='logo BestCabins'/>*/}

            {/*</DrawerHeader>*/}

            <Drawer
                variant="permanent"
                open={true}>
<Box
sx={{
    py: 2,
    background: '#ffb300',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}}>
</Box>
                <Box sx={{
                    p: 2,
                    m: 2,
                    '& .MuiTextField-root': {
                        // my: 1,
                    },
                    textAlign: 'center',}}>

                    <TextField label={'Выручка'}/>
                    <div><TextField label={'Денег на р/с'}/></div>
                    <div><TextField label={'Коэф-т рентабильности'}/></div>
                    <div><TextField label={'Прибыль'}/></div>

                    <Divider>Расходы</Divider>

                    <div><TextField label={'Расходы'}/></div>
                    <div><TextField label={'Постоянные'}/></div>
                    <div><TextField label={'Переменные'}/></div>
                    <div><TextField label={'Налоги'}/></div>

                </Box>






            </Drawer> : <></>
            <Box component="main" sx={{

                flexGrow: 1, p: 3,
            }}>
                {children}
            </Box>
        </Box>

    )
}

export default HomeDrawer;
