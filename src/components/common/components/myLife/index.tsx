import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";

const MyLife = () => {

    const changeCapital = () => {

    }

    const arr: any = [
        {name: 'Капитал', price: 5000},
        {name: 'Дивиденды', price: 5000},
        {name: 'Зарплата', price: 5000},
        {name: 'Дельта', price: 5000},
        {name: 'Разовые расходы', price: 5000},
        {name: 'Расходы на жизнь', price: 5000},
    ]

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', ml: 35, p: 1}}>
            {arr.map((item: any) =>
            <Card
                key={item.name}
                 sx={{m: 0.5, p: 1}}>
                <TextField
                    margin="normal"
                    variant={'standard'}
                    sx={{
                                mt: -3,
                        '& .MuiInput-root': {
                            '&:before, :after, :hover:not(.Mui-disabled):before': {
                                borderBottom: 0,
                            },
                        },
                    }}
                    onChange={changeCapital}
                    name={'capital'}
                    label={item.name}
                    defaultValue={item.price}/>
            </Card>)}

<Box sx={{
    display: 'flex',
    alignItems: 'center',
    p: 0,
}}>

                <Button
                    sx={{
                        ml: 2
                    }}
                    color={'secondary'}
                        variant={'contained'}
                >Оставить</Button>
                <Button
                    sx={{
                        mx: 1
                    }}
                    color={'secondary'}
                        variant={'contained'}
                >Отдать</Button>
                <Button color={'secondary'}
                        variant={'contained'}
                >Сбросить</Button>
</Box>

        </Box>
    );
};

export default MyLife;
