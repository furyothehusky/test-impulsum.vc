
interface PasswordFieldProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type: string;
}

export default function PasswordField({ label, value, onChange, placeholder, type }: PasswordFieldProps) {
    return (
        <div className="input-wrapper">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}
