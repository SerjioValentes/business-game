import React, {useState} from 'react';
import {Divider, TextField, Box} from "@mui/material";
import 'swiper/css';

const IncomingPayments = () => {


    return (
        <Box sx={{
            position: 'relative'
        }}>
            <Box sx={{
                width: 300,
                height: '100%',
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

        </Box>
    );
};

export default IncomingPayments;
