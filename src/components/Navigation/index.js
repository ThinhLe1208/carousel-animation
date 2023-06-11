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
            <img src={require('../../assets/images/nav_pink.png')} alt="pink" />
            <img src={require('../../assets/images/nav_green.png')} alt="blue" />
            <img src={require('../../assets/images/nav_blue.png')} alt="green" />
        </motion.div>
    );
};

export default Navigation;

