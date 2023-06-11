import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Navigation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', duration: 2, delay: 3 }}
            className={styles.wrapper}
        >
            <img src={require('../../assets/images/pink_nav.jpg')} alt="pink" />
            <img src={require('../../assets/images/blue_nav.jpg')} alt="blue" />
            <img src={require('../../assets/images/green_nav.jpg')} alt="green" />
        </motion.div>
    );
};

export default Navigation;

