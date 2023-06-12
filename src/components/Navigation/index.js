import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Navigation = () => {
    console.log('render Navigation');

    return (
        <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', duration: 2, delay: 3 }}
            className={styles.wrapper}
        >
            <div className={styles.bgOusite}>
                <div className={styles.border}>
                    <div className={styles.bgInside}>
                        <div className={styles.imgContainer}>
                            <motion.img
                                className={styles.image}
                                src={require('../../assets/images/nav_pink.png')}
                                alt="pink"
                            />
                        </div>
                        <div className={styles.imgContainer}>
                            <motion.img
                                className={styles.image}
                                src={require('../../assets/images/nav_green.png')
                                } alt="blue"
                            />
                        </div>
                        <div className={styles.imgContainer}>
                            <motion.img
                                className={styles.image}
                                src={require('../../assets/images/nav_blue.png')}
                                alt="green"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <motion.div className={styles.roundedBar}></motion.div> */}


        </motion.div>
    );
};

export default Navigation;

