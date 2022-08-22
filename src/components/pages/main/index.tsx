import React from 'react';
import CardChoisePage from "../cardChoisePage";
import IncomingPayments from "../incomingPay";
import MyLife from "../../common/components/myLife";
import BusinessPart from "../businessIncome";
import BusinessExpenses from "../businessExpenses";
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <div>
            <MyLife />
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>

            <IncomingPayments />
            <BusinessPart />
            <CardChoisePage />
            <BusinessExpenses />
            </Box>
        </div>
    );
};

export default HomePage;
