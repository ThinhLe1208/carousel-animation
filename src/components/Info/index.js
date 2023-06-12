import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Info = () => {
    console.log('render Info');
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2, delay: 3 }}
            className={styles.wrapper}

        >
            <h1 className={styles.title}>Airmax <span className={styles.secondTitle}>270</span></h1>
            <h2 className={styles.subTitle}>React</h2>

            <p className={styles.price}>$270</p>

            <p className={styles.color}>Color</p>

            <button className={styles.button}>BUY</button>
        </motion.div>
    );
};

export default Info;
