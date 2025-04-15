import { Button } from 'primereact/button';

interface ButtonProps {
    label: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}
const ButtonFeild: React.FC<ButtonProps> = ({ label, className, disabled, onClick }) => {
    return <>
        <Button
            label={label}
            className={`shadow-none focus:ring-0 p-3 bg-bg_primary text-text_inverse font-Chillax  text-lg tracking-wider rounded-button mt-3 ${className}`}
            disabled={disabled}
            onClick={onClick}
        />
    </>
}

export default ButtonFeild