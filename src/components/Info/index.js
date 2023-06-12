import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';

const Info = ({ product, delayCarousel }) => {
    console.log('render Info');

    const staggerChildren = 0.1;
    const delaySub = 1.4;
    const exitDur = 0.3;


    return (
        <AnimatePresence>
            <motion.div
                className={styles.wrapper}
                key={product?.id}
            >
                <motion.h1
                    className={styles.title}
                    initial={{
                        transform: 'translateX(-1000%)'
                    }}
                    animate={{
                        transform: 'translateX(0%)'
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 0,
                        duration: 1
                    }}
                    exit={{
                        transform: 'translateX(-1000%)',
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 0,
                            duration: 1
                        }
                    }}
                >
                    Nike ZoomX <span className={styles.secondTitle}>Vaporfly</span>
                </motion.h1>
                <motion.h2
                    className={styles.subTitle}
                    initial={{
                        transform: 'translateX(-1000%)'
                    }}
                    animate={{
                        transform: 'translateX(0%)'
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 1,
                        duration: 1
                    }}
                    exit={{
                        transform: 'translateX(-1000%)',
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 1,
                            duration: 1
                        }
                    }}
                >
                    NEXT%
                </motion.h2>

                <motion.p
                    className={styles.price}
                    initial={{
                        transform: 'translateX(-1000%)'
                    }}
                    animate={{
                        transform: 'translateX(0%)'
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 2,
                        duration: 1
                    }}
                    exit={{
                        transform: 'translateX(-1000%)',
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 2,
                            duration: 1
                        }
                    }}
                >
                    $270
                </motion.p>

                <motion.p
                    className={styles.color}
                    initial={{
                        transform: 'translateX(-1000%)'
                    }}
                    animate={{
                        transform: 'translateX(0%)'
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 3,
                        duration: 1
                    }}
                    exit={{
                        transform: 'translateX(-1000%)',
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 3,
                            duration: 1
                        }
                    }}
                >
                    Color
                </motion.p>

                <motion.button
                    className={styles.button}
                    initial={{
                        transform: 'translateX(-1000%)'
                    }}
                    animate={{
                        transform: 'translateX(0%)'
                    }}
                    transition={{
                        type: 'spring',
                        delay: 1.6 + staggerChildren * 4,
                        duration: 1
                    }}
                    exit={{
                        transform: 'translateX(-1000%)',
                        transition: {
                            type: 'spring',
                            delay: staggerChildren * 4,
                            duration: 1
                        }
                    }}
                >
                    BUY
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Info;
