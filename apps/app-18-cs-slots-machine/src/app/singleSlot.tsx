import {forwardRef, useImperativeHandle, useState} from "react";

export type SlotsHandle = {
    reInitializeSlots: () => void;
};

function randomEmojiSelector(): string {
    const emojis = ["🍒", "🍇", "🍊"];
    const randomEmoji = Math.floor(Math.random() * emojis.length);
    return emojis[randomEmoji];
}

function SlotImplemented(_props: object, ref: React.Ref<SlotsHandle>) {
    const [slot1, setSlot1] = useState(randomEmojiSelector());
    const [slot2, setSlot2] = useState(randomEmojiSelector());
    const [slot3, setSlot3] = useState(randomEmojiSelector());

    const reInitializeSlots = () => {
        setSlot1(randomEmojiSelector());
        setSlot2(randomEmojiSelector());
        setSlot3(randomEmojiSelector());
    }

    useImperativeHandle(ref, () => ({
        reInitializeSlots,
    }));

    return (
        <>
            <div>
                <span>{slot1}</span>
                <span>{slot2}</span>
                <span>{slot3}</span>
            </div>
            <h3>{(slot1 === slot2 && slot2 === slot3) ? 'You Win!' : 'You Lose!'}</h3>
        </>
    )
}

export const OneSlot = forwardRef(SlotImplemented);
