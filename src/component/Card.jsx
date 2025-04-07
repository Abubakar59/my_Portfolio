import { CardBox, IconBox } from "./Styles";
const CardVariants = {
    beforeHover: {},
    onHover: {
        scale: 1.1
    }
};
const IconVariants = {
    beforeHover: {
        opacity: 0,
        y: -50
    },
    onHover: {
        opacity: 1,
        y: 0,
        scale: 1.5,
        transition: {
            type: "tween"
        }
    }
};

const Card = ({ icon }) => {
    console.log(icon);
    return (
        <CardBox variants={CardVariants} initial="beforeHover" whileHover="onHover">
            <IconBox variants={IconVariants}>{icon}</IconBox>
        </CardBox>
    );
};