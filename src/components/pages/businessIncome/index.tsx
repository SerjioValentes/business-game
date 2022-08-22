import React from 'react';
import {Box, Divider, InputLabel, TextField, Typography} from "@mui/material";

const BusinessPart = () => {
    return (
        <div>
            <Box sx={{
                border: 1,
                borderRadius: 2,
                p: 2,
                m: 2,
                maxWidth: 300,
                display: 'flex',
                flexWrap: 'wrap'
            }}>

                <Box sx={{my: 1}}>
                <Typography>Сколько человек нас увидело</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Конверсия сайта/баннера</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Количество лидов(хотят товар или услугу</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Конверсия в оплату</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Количество лидов без маркетинга (сарафан)</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Лиды привлеченные разово</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Оплат</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Конверсия в постоянных клиентов</Typography>
                    <TextField sx={{width: 130, mr: 2}}/>
                    <TextField sx={{width: 130}}/>
                </Box>
                <Box sx={{my: 1}}>
                    <Typography>Клиенты платят регулярно(LTV)</Typography>
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
                                label={'Средний чек'}
                            value={'100'}
                            />
                        </div>
                        <div>
                            <TextField
                            value={'100'}
                            sx={{width: 130}}
                            label={'Оборот в мес'}/>
                        </div>
                    </Box>
                </div>
            </Box>
        </div>
    );
};

export default BusinessPart;
