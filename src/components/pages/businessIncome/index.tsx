import React from 'react';
import {Box, InputLabel, TextField} from "@mui/material";

const BusinessPart = () => {
    return (
        <div>
            <Box>
                <Box>
                    <InputLabel>Сколько человек нас увидело</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Конверсия сайта/баннера</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Количество лидов(хотят товар или услугу</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Конверсия в оплату</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Количество  лидов без маркетинга (сарафан)</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Лиды привлеченные разово</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Оплат</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Конверсия в постоянных клиентов</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Клиенты платят регулярно(LTV)</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>

                {/*Start ---Это поле видимо не редактируется*/}
                <TextField label={'Средний чек'}/>
                <TextField label={'Оборот в мес'}/>
                {/*End -----Это поле видимо не редактируется*/}
            </Box>
        </div>
    );
};

export default BusinessPart;