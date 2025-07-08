"use client"
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import {  useState } from 'react';

const AnimatedSection = ({ cards, animationVariant }:any) => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [show, setShow] = useState(false);

;

  return (
    <>
      {cards.map((CardComponent:any, i:number) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={animationVariant}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CardComponent />
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedSection;
