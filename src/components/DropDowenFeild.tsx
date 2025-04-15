import { Dropdown } from "primereact/dropdown";

interface DropDowenFeildProps {
    label: string;
    placeholder: string;
    className: string;
    value: string;
    onChange: (value: string) => void;
    error: string;
    options: string[];
}
const DropDowenFeild: React.FC<DropDowenFeildProps> = ({ label, placeholder, className, value, onChange, error, options }) => {
    return <>
        <div className="flex flex-col gap-2 p-3">
            <label htmlFor={label} className="font-normal text-base text-text_muted">
                {label}
            </label>
            <Dropdown
                id={label}
                value={value}
                onChange={(e) => onChange(e.value)}
                options={options}
                placeholder={placeholder}
                className={`shadow-none bg-bg_default focus:ring-0 w-full  rounded-input  border border-border_default text-gray-500  ${className} `}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    </>
}

export default DropDowenFeild