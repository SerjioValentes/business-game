import React from 'react';
import CardChoisePage from "../cardChoisePage";
import IncomingPayments from "../incomingPay";
import MyLife from "../../common/components/myLife";
import BusinessPart from "../businessIncome";
import BusinessExpenses from "../businessExpenses";
import {Box} from '@mui/material';
import HomeDrawer from "../homeDrawer";

const HomePage = () => {
    return (
        <div>
            <HomeDrawer>
                <Box sx={{
                    ml: 30,
                    mt: 7,
                }}>
                    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                        {/*<Box sx={{*/}
                        {/*    // position: 'sticky',*/}
                        {/*    // top: 0,*/}
                        {/*    // background: '#fff',*/}
                        {/*    // zIndex: 1*/}
                        {/*}}>*/}

                        {/*    <IncomingPayments/>*/}
                        {/*</Box>*/}
                        <BusinessPart/>
                        <CardChoisePage/>
                        <BusinessExpenses/>
                    </Box>
                </Box>
            </HomeDrawer>
        </div>
    );
};

export default HomePage;
