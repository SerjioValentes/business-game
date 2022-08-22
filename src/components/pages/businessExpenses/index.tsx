import React from 'react';
import {Box, Divider, InputLabel, TextField, Typography} from "@mui/material";





const BusinessExpenses = () => {
    return (
        <div>
            <Box sx={{
                p: 2,
                m: 2,
                borderRadius: 2,
                maxWidth: 300, display: 'flex', flexWrap: 'wrap', border: 1}}>
                    <Box sx={{my: 1}}>
                    <Typography>Стоимость лида</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                    </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Расходы на трафик</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                    </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Переменные расходы на ФОТ отдела продаж (Sales Cost)</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Процент премиальной части ОП</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Что-то еще</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Премии</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Переменные расходы на исполнение обязательств (Production Cost)</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Расходы на долги</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>
                    <Box sx={{my: 1}}>
                    <Typography>Налоговая ставка</Typography>
                        <TextField sx={{width: 130, mr: 2}}/>
                        <TextField sx={{width: 130}}/>
                </Box>

                <div>
                    <div>
                        <Divider sx={{my: 2}}>Итог</Divider>
                    </div>
                    <Box sx={{display: 'flex', width: '105%', justifyContent: 'space-between'}}>
                        <div>
                            <TextField
                                sx={{width: 130}}
                                label={'Постоянные расходы'}
                                value={'100'}
                            />
                        </div>
                        <div>
                            <TextField
                                value={'100'}
                                sx={{width: 130}}
                                label={'ФОТ'}/>
                        </div>
                    </Box>
                </div>
            </Box>
        </div>
    );
};

export default BusinessExpenses;
