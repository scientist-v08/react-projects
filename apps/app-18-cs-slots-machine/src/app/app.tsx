// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';

import { useRef } from "react";
import { SlotsHandle, OneSlot } from "./singleSlot";

function App() {
    const slotRef1 = useRef<SlotsHandle>(null);
    const slotRef2 = useRef<SlotsHandle>(null);
    const slotRef3 = useRef<SlotsHandle>(null);

    const handleClick = () => {
        slotRef1.current?.reInitializeSlots();
        slotRef2.current?.reInitializeSlots();
        slotRef3.current?.reInitializeSlots();
    };

    return (
        <>
            <h1>Slots machine</h1>
            <OneSlot ref={slotRef1} />
            <OneSlot ref={slotRef2} />
            <OneSlot ref={slotRef3} />
            <button onClick={handleClick}>Refresh slots</button>
        </>
    );
}

export default App;
