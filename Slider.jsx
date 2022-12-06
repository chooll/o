import React from 'react';
import {Carousel, Image} from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image className="d-block w-100" src="image/wal1.jpeg" alt="Cool Image 1"/>
                <Carousel.Caption>
                    <h3>Работы с изображением индивидуально для каждого</h3>
                    <p>Очень дешево и качествено</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image className="d-block w-100" src="image/wal2.png" alt="Cool Image 1"/>
                <Carousel.Caption>
                    <h3>Лучшие рабочие обои для вас</h3>
                    <p>Очень дешево и качествено</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image className="d-block w-100" src="image/wal3.jpg" alt="Cool Image 1"/>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;