import React, {useState} from 'react';
import {Divider, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from "swiper";
const IncomingPayments = () => {


    const [thumbsSwiper, setThumbsSwiper] = useState<File | null>(null);

    return (
        <div>
            {/*<button onClick={() => slideTo(1)} className="prepend-slide">*/}
            {/*    Slide 1*/}
            {/*</button>*/}


            <Swiper
                loop={true}
                navigation={true}
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div><TextField label={'Выручка'}/></div>
                    <div><TextField label={'Денег на р/с'}/></div>
                    <div><TextField label={'Коэф-т рентабильности'}/></div>
                    <div><TextField label={'Прибыль'}/></div>

                    <Divider>Расходы</Divider>

                    <div><TextField label={'Расходы'}/></div>
                    <div><TextField label={'Постоянные'}/></div>
                    <div><TextField label={'Переменные'}/></div>
                    <div><TextField label={'Налоги'}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><TextField label={'Выручка'}/></div>
                    <div><TextField label={'Денег на р/с'}/></div>
                    <div><TextField label={'Коэф-т рентабильности'}/></div>
                    <div><TextField label={'Прибыль'}/></div>

                    <Divider>Расходы</Divider>

                    <div><TextField label={'Расходы'}/></div>
                    <div><TextField label={'Постоянные'}/></div>
                    <div><TextField label={'Переменные'}/></div>
                    <div><TextField label={'Налоги'}/></div>
                </SwiperSlide>
            </Swiper>
            {/*<Swiper*/}
            {/*    onSwiper={setThumbsSwiper}*/}
            {/*    loop={true}*/}
            {/*    spaceBetween={10}*/}
            {/*    slidesPerView={4}*/}
            {/*    freeMode={true}*/}
            {/*    watchSlidesProgress={true}*/}
            {/*    modules={[FreeMode, Navigation, Thumbs]}*/}
            {/*>*/}
            {/*    <SwiperSlide>*/}
            {/*        <button>show</button>*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}

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

        </div>
    );
};

export default IncomingPayments;