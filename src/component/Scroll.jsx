import React from "react";
import Card from "./Card";
import { motionContainerVariants } from "./animations"; // Import container animation variants

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];

const ScrollTriggered = () => {
    return (
        <motion.div
            style={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            variants={motionContainerVariants}
        >
            {food.map(([emoji, hueA, hueB], i) => (
                <Card key={emoji} i={i} emoji={emoji} hueA={hueA} hueB={hueB} />
            ))}
        </motion.div>
    );
};

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

export default ScrollTriggered;
