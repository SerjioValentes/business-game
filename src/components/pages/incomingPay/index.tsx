import React, {useState} from 'react';
import {Divider, TextField, Box} from "@mui/material";
import 'swiper/css';
const IncomingPayments = () => {


    return (
        <div>

                    <Box sx={{
                        border: 1,
                        borderRadius: 2,
                        p: 2,
                        m: 2,
                        '& .MuiTextField-root': {
                            my: 1,
                        },
                        textAlign: 'center',
                    }}>

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

        </div>
    );
};

export default IncomingPayments;
