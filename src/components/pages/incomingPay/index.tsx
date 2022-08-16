import React from 'react';
import {Divider, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";

const IncomingPayments = () => {
    return (
        <div>
            {/*<Card>*/}
            {/*    <Typography>Личный капитал</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <Typography>Дивиденды</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <Typography>Зарплата</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <Typography>Дельта</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <Typography>Разовые расходы</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <Typography>Расходы на жизнь</Typography>*/}
            {/*    <Typography>5000</Typography>*/}
            {/*</Card>*/}


            <div>
                <TextField
                    label={'Выручка'}
                />
            </div>

            <div>

                <TextField
                    label={'Денег на р/с'}
                />
            </div>
            <div>
                <TextField
                    label={'Коэф-т рентабильности'}
                />
            </div>
            <div>
                <TextField
                    label={'Прибыль'}
                />
            </div>

            <Divider>Расходы</Divider>
            <div>


            <TextField
                label={'Расходы'}
            />
            </div>
<div>

            <TextField
                label={'Постоянные'}
            />
</div>
            <div>


            <TextField
                label={'Переменные'}
            />
            </div>
            <div>

            <TextField
                label={'Налоги'}
            />
            </div>

        </div>
    );
};

export default IncomingPayments;