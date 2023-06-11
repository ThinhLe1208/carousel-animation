import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';

const ShootingStar = ({
    key,
    delay,
    boxShadow,
    backgroundDot,
    backgroundLine,
}) => {
    return (
        <AnimatePresence>
            <motion.div
                className={styles.wrapper}
                key={key}
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
                        duration: 0.4,
                        delay: delay
                    },
                    transform: {
                        duration: 0.8,
                        delay: delay + 0.4,
                    },
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        delay: 0
                    }
                }}
            >
                <motion.div
                    className={styles.dot}
                    animate={{
                        opacity: [0, 1],
                        scale: [1.4, 1, 0.8, 1]
                    }}
                    transition={{
                        opacity: {
                            duration: 0.4,
                            delay: delay + 1
                        },
                        scale: {
                            duration: 3,
                            times: [0, 0.3, 0.6, 1],
                            repeatDelay: 0.4,
                            repeat: Infinity,
                        }
                    }}
                    style={{
                        '--bg-dot': backgroundDot,
                        '--shadow-dot': boxShadow
                    }}
                />

                <motion.div
                    className={styles.line}
                    animate={{
                        scaleX: [0.4, 1],
                    }}
                    transition={{
                        scaleX: {
                            duration: 2,
                            type: 'spring',
                            delay: delay + 0.3
                        }
                    }}
                    style={{
                        '--bg-line': backgroundLine
                    }}
                />
            </motion.div >
        </AnimatePresence>
    );
};

export default ShootingStar;

