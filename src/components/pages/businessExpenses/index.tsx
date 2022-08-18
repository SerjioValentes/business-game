import React from 'react';
import {Box, InputLabel, TextField} from "@mui/material";

const BusinessExpenses = () => {
    return (
        <div>
            <Box>
                <Box>
                    <InputLabel>Стоимость лида</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Расходы на трафик</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Переменные расходы на ФОТ отдела продаж (Sales Cost)</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Процент премиальной части ОП</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Что-то еще</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Премии</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Переменные расходы на исполнение обязательств (Production Cost)</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Расходы на долги</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>
                <Box>
                    <InputLabel>Налоговая ставка</InputLabel>
                    <Box>
                        <TextField/>
                        <TextField/>
                    </Box>
                </Box>

                {/*Start ---Это поле видимо не редактируется*/}
                <TextField label={'Постоянные расходы'}/>
                <TextField label={'ФОТ'}/>
                {/*End -----Это поле видимо не редактируется*/}
            </Box>
        </div>
    );
};

export default BusinessExpenses;