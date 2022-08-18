import React from 'react';
import CardChoisePage from "../cardChoisePage";
import IncomingPayments from "../incomingPay";
import MyLife from "../../common/components/myLife";
import BusinessPart from "../businessIncome";
import BusinessExpenses from "../businessExpenses";

const HomePage = () => {
    return (
        <div>
            <MyLife />
            {/*<CardChoisePage />*/}
            {/*<IncomingPayments />*/}
            {/*<BusinessPart />*/}
            <BusinessExpenses />
        </div>
    );
};

export default HomePage;