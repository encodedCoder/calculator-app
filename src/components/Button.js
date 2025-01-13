const Button = ({ label, onClick }) => {
    return (
        <button className="calculator-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;