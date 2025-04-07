import { Container } from "./Styles";
import Card from "./Card";
import { ReactComponent as AddIcon } from "./assets/add.svg";
import { ReactComponent as AirplaneIcon } from "./assets/airplane.svg";
import { ReactComponent as AlarmIcon } from "./assets/alarm.svg";
//more svg imports below...

const icons = [
    <AddIcon />,
    <AirplaneIcon />,
    <AlarmIcon />,
    //more icons below
];

const CardContainer = () => {
    return (
        <Container initial={{ x: -1000 }} animate={{ x: 0 }}>
            {icons.map((icon) => (
                <Card icon={icon} />
            ))}
        </Container>
    );
};