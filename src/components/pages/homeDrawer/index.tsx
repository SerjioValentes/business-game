import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {Box, Divider, MenuItem, TextField} from "@mui/material";

const HomeDrawer = () => {

    return (
        <div>
            {/*<Drawer*/}
            {/*    variant="permanent"*/}

            {/*    anchor={'left'}*/}
            {/*    open={true}>*/}
            {/*    <Box sx={{*/}
            {/*        border: 1,*/}
            {/*        borderRadius: 2,*/}
            {/*        p: 2,*/}
            {/*        m: 2,*/}
            {/*        '& .MuiTextField-root': {*/}
            {/*            my: 1,*/}
            {/*        },*/}
            {/*        textAlign: 'center',*/}
            {/*    }}>*/}

            {/*        <TextField label={'Выручка'}/>*/}
            {/*        <div><TextField label={'Денег на р/с'}/></div>*/}
            {/*        <div><TextField label={'Коэф-т рентабильности'}/></div>*/}
            {/*        <div><TextField label={'Прибыль'}/></div>*/}

            {/*        <Divider>Расходы</Divider>*/}

            {/*        <div><TextField label={'Расходы'}/></div>*/}
            {/*        <div><TextField label={'Постоянные'}/></div>*/}
            {/*        <div><TextField label={'Переменные'}/></div>*/}
            {/*        <div><TextField label={'Налоги'}/></div>*/}
            {/*    </Box>*/}
            {/*</Drawer>*/}

            <Box sx={{
                width: 300
            }}>
            </Box>




        </div>
    );
}

export default HomeDrawer;
