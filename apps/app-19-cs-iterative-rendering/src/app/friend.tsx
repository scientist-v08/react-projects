export type FriendInterface = {
    name: string;
    hobbies: string[];
};

export function Friend(props: FriendInterface) {
    return (
        <>
            <h1>{props.name}</h1>
            <ul>
                {props.hobbies.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}