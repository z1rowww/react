interface ButtonProps {
    label?: string;
    onButtonClick?: () => void;
}

const Button = (props : ButtonProps) => {
    const {label = "Default",onButtonClick} = props;
    return (
        <button onClick = {onButtonClick}>{label}</button>
    )
}

export default Button;

/*Make onClick method for button*/