import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './ImageSlider.module.css';

const ImageSlider = () => {

    let imageLinks = [
        'https://images.unsplash.com/photo-1517856497829-3047e3fffae1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://mullenlowesalt.com/wp-content/uploads/2016/02/EC7H48-1600x900.jpg',
        'https://images.unsplash.com/photo-1528803974417-61bba271ff40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ];

    let imgs = imageLinks.map(imgLink => (
        <img className={classes.Image} key={imgLink} src={imgLink} alt=""/>
    ));

    return (
        <div className={classes.myCarousal}>
            <Carousel showThumbs={false} infiniteLoop={true}>
                {imgs}
            </Carousel>
        </div>
    );
};

export default ImageSlider;