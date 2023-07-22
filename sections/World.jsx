"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} realtive z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title=" | Get in touch " textStyles="text-center" />

      <TitleText
        title={<> Let's create something great together! </>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full "
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1 lg:top-20 left-[50%] lg:left-[55%] lg:w-[200px] lg:h-[120px] w-[140px] h-[90px] p-[6px] rounded-[15px]  ">
          <img
            src="/planet-02.png"
            alt="people"
            className="w-full h-full rounded-[15px]"
          />
        </div>

        <div className="absolute top-1 lg:top-20 left-[50%] lg:left-[55%] lg:w-[200px] lg:h-[120px] w-[140px] h-[90px] p-[6px] rounded-[15px]  ">
          <img
            src="/map-01.png"
            alt="people"
            className="w-full h-full rounded-[15px]"
          />
        </div>

        <div className="absolute top-1 left-[50%] lg:bottom-20 lg:right-20 gradient-03  ">


        </div>
      </motion.div>
    </motion.div>

    {/* World section */}
  </section>
);

export default World;
