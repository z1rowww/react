interface GreetingProps {
    name : string;
}

const Greeting = (props: GreetingProps) => {
    return (
        <>
            <p>Привіт, {props.name}!</p>
        </>
    )
}

export default Greeting;