import { InputText } from 'primereact/inputtext'

interface InputFeildProps {
    id: string
    name: string
    value: number | string
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    disabled?: boolean
    className?: string
    label?: string
    error?: string
}
const InputFeild: React.FC<InputFeildProps> = ({ type, id, name, value, onChange, placeholder, disabled, className, label, error }) => {
    return <>
        <div className={`flex flex-col gap-2 p-3`}>
            <label htmlFor={id} className=" font-normal text-base text-text_muted">{label}</label>
            <InputText
                id={id}
                name={name}
                value={typeof value === 'number' ? value.toString() : value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                className={ `shadow-none bg-bg_default focus:ring-0 w-full rounded-input  border border-border_default text-gray-500 p-3 ${className}`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    </>
}

export default InputFeild