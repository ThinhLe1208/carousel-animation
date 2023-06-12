import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';
import NikePath from '../NikePath';
import MainShoe from '../MainShoe';
import Info from '../Info';
import Navigation from '../Navigation';

const productList = [
    {
        id: 0,
        image: require('../../assets/images/main_pink.png'),
        navImage: require('../../assets/images/nav_pink.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },
    {
        id: 1,
        image: require('../../assets/images/main_green.png'),
        navImage: require('../../assets/images/nav_green.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },
    {
        id: 2,
        image: require('../../assets/images/main_blue.png'),
        navImage: require('../../assets/images/nav_blue.png'),
        subShoeList: [
            { id: 0, image: require('../../assets/images/sub_blue_1.png') },
            { id: 1, image: require('../../assets/images/sub_blue_2.png') },
            { id: 2, image: require('../../assets/images/sub_blue_3.png') },
        ]
    },
];

const Carousel = () => {
    console.log('render Carousel');
    const [updatedList, setUpdatedList] = useState([
        productList[productList.length - 1],
        ...productList,
        productList[0]
    ]);
    const [currentProduct, setCurrentProduct] = useState(productList[1]);
    const delayCarousel = 0.8;

    const handleSetProduct = useCallback((id) => {
        let index = productList?.findIndex(item => item.id === id);
        let updatedProduct = productList[index];
        // improve logic later
        let preIndex = index - 1;
        if (preIndex < 0) {
            preIndex = productList.length - 1;
        }
        let preCloneIndex = preIndex - 1;
        if (preCloneIndex < 0) {
            preCloneIndex = productList.length - 1;
        }
        let nextIndex = index + 1;
        if (nextIndex > productList.length - 1) {
            nextIndex = 0;
        }
        let nextCloneIndex = nextIndex + 1;
        if (nextCloneIndex > productList.length - 1) {
            nextCloneIndex = 0;
        }
        let updatedList = [productList[preCloneIndex], productList[preIndex], productList[index], productList[nextIndex], productList[nextCloneIndex]];
        setCurrentProduct(updatedProduct);
        setUpdatedList(updatedList);
    }, []);

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
                    <MainShoe product={currentProduct} delayCarousel={delayCarousel} />
                </div>

                <div className={styles.navContainer}>
                    <Navigation handleSetProduct={handleSetProduct} updatedList={updatedList} />
                </div>
            </div>
        </div >
    );
};

export default Carousel
    ;