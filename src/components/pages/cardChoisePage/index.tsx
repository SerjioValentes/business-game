import React from 'react';
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {Typography} from "@mui/material";

const CardChoisePage = () => {
    return (
        <div>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Box sx={{display: 'inline-block', mt: 2, minWidth: 310}}>
                    <Box sx={{p: 2}}>
                        <ButtonGroup fullWidth variant="contained">
                            <Button>Финансы</Button>
                            <Button>Маркетинг</Button>
                            <Button>Личные ситуации</Button>
                        </ButtonGroup>
                    </Box>
                    <Box sx={{px: 2}}>
                        <ButtonGroup fullWidth variant="contained">
                            <Button>Личный бренд</Button>
                            <Button>Продукт</Button>
                            <Button>Продажи</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>

            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

            <Card sx={{m: 4, p: 2, maxWidth: 500}} raised>
                <Typography>День 1</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda cum cupiditate delectus deserunt dolor eius exercitationem itaque nostrum placeat, quia reiciendis repellendus, rerum sunt. Aspernatur, dolorem necessitatibus. Quae.</Typography>
            </Card>

            <Card sx={{m: 4, p: 2, maxWidth: 500}} raised>
                <Typography>Карта на всех</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad assumenda cum cupiditate delectus deserunt dolor eius exercitationem itaque nostrum placeat, quia reiciendis repellendus, rerum sunt. Aspernatur, dolorem necessitatibus. Quae.</Typography>
            </Card>
            </Box>
        </div>
    );
};

export default CardChoisePage;