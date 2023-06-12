import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const ShootingStar = ({
    delay,
    boxShadow,
    backgroundDot,
    backgroundLine,
}) => {
    const opacityDur = 0.2;
    const transformDur = 0.3;

    return (
        <motion.div
            className={styles.wrapper}
            initial={{
                opacity: 0,
                transform: 'rotate(-50deg) translateX(200px)',
            }}
            animate={{
                opacity: 1,
                transform: 'rotate(-50deg) translateX(0)',
            }}
            transition={{
                opacity: {
                    duration: opacityDur,
                    delay: delay + 0.2
                },
                transform: {
                    duration: transformDur,
                    delay: delay + opacityDur,
                },
            }}
            exit={{
                opacity: 0,
                transform: 'rotate(-50deg) translateX(-200px)',
                transition: {
                    duration: transformDur,
                    delay: 0
                }
            }}
        >
            <motion.div
                className={styles.dot}
                animate={{
                    background: backgroundDot,
                    boxShadow: boxShadow,
                    opacity: [0, 1],
                    scale: [1.4, 1, 0.8, 1]
                }}
                transition={{
                    opacity: {
                        duration: 0.4,
                        delay: delay + opacityDur + transformDur
                    },
                    scale: {
                        duration: 3,
                        times: [0, 0.3, 0.6, 1],
                        repeatDelay: 0.4,
                        repeat: Infinity,
                    }
                }}
            />

            <motion.div
                className={styles.line}
                animate={{
                    background: backgroundLine,
                    scaleX: [0.4, 1],
                }}
                transition={{
                    scaleX: {
                        duration: transformDur * 3,
                        type: 'spring',
                        delay: delay + opacityDur
                    }
                }}
                exit={{
                    scaleX: 1.4,
                    transition: {
                        duration: transformDur,
                        delay: 0
                    }
                }}
            />
        </motion.div >
    );
};

export default ShootingStar;

