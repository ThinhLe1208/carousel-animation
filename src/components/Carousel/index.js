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
        // image: require('../../assets/images/main_pink.png'),
        image: require('../../assets/images/main_blue.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },
    {
        id: 1,
        image: require('../../assets/images/main_green.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },
    {
        id: 2,
        image: require('../../assets/images/main_blue.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },

];

const Carousel = () => {
    console.log('render Carousel');
    const [product, setProduct] = useState(productList[0]);
    const delayCarousel = 0.8;

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