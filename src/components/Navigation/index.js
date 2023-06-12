import React, { memo } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Navigation = memo(({
    handleSetProduct,
    updatedList
}) => {
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
                        {/* clone start */}
                        <motion.div
                            className={styles.imgContainer}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 0
                            }}
                        >
                            <motion.img
                                className={styles.image}
                                src={updatedList[0]?.navImage}
                                alt="pink"
                            />
                        </motion.div>
                        {/* main */}
                        <div className={styles.imgContainer} onClick={() => handleSetProduct(updatedList[1]?.id)}>
                            <motion.img
                                className={styles.image}
                                src={updatedList[1]?.navImage}
                                alt="pink"
                            />
                        </div>
                        <div className={styles.imgContainer} onClick={() => handleSetProduct(updatedList[2]?.id)}>
                            <motion.img
                                className={styles.image}
                                src={updatedList[2]?.navImage}
                                alt="blue"
                            />
                        </div>
                        <div className={styles.imgContainer} onClick={() => handleSetProduct(updatedList[3]?.id)}>
                            <motion.img
                                className={styles.image}
                                src={updatedList[3]?.navImage}
                                alt="green"
                            />
                        </div>
                        {/* main */}
                        {/* clone end */}
                        <div className={styles.imgContainer} >
                            <motion.img
                                className={styles.image}
                                src={updatedList[4]?.navImage}
                                alt="green"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <motion.div className={styles.roundedBar}></motion.div> */}


        </motion.div>
    );
});

export default Navigation;

