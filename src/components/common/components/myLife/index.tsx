import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";

const MyLife = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >Личная жизнь</AccordionSummary>
                <AccordionDetails>

                    <Box sx={{display: 'flex', flexWrap: 'wrap', my: 2}}>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Капитал</Typography>
                            <Typography>5000</Typography>
                        </Card>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Дивиденды</Typography>
                            <Typography>5000</Typography>
                        </Card>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Зарплата</Typography>
                            <Typography>5000</Typography>
                        </Card>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Дельта</Typography>
                            <Typography>5000</Typography>
                        </Card>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Разовые расходы</Typography>
                            <Typography>5000</Typography>
                        </Card>
                        <Card raised sx={{m: 0.5, p: 1}}>
                            <Typography>Расходы на жизнь</Typography>
                            <Typography>5000</Typography>
                        </Card>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MyLife;