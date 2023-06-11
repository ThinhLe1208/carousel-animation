import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';
import NikePath from '../NikePath';
import MainShoe from '../MainShoe';
import Info from '../Info';
import Navigation from '../Navigation';

const productList = [
    {
        id: 0,
        imgSrc: require('../../assets/images/main_pink.png')
    },
    {
        id: 1,
        imgSrc: require('../../assets/images/main_green.png')
    },
    {
        id: 2,
        imgSrc: require('../../assets/images/main_blue.png')
    },

];

const Carousel = () => {
    const [product, setProduct] = useState(productList[0]);
    const delayCarousel = 1;

    return (
        <div className={styles.wrapper}>
            {/* background */}
            <motion.p
                className={styles.backgroundNike}
                initial={{ left: '-100%' }}
                animate={{ left: '50%' }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 2, delay: delayCarousel + 0.6 }}
            >
                NIKE
            </motion.p>

            <NikePath delayCarousel={delayCarousel} />

            {/* Slider */}

            <div className={styles.slider}>
                <div className={styles.infoContainer}>
                    <Info delayCarousel={delayCarousel} />
                </div>

                <div className={styles.mainShoeContainer}>
                    <MainShoe product={product} delayCarousel={delayCarousel} />
                </div>

                <div className={styles.navContainer}>
                    <Navigation />
                    <button onClick={() => setProduct(productList[0])}>Product 1</button>
                    <button onClick={() => setProduct(productList[1])}>Product 2</button>
                    <button onClick={() => setProduct(productList[2])}>Product 3</button>
                </div>
            </div>
        </div >
    );
};

export default Carousel
    ;