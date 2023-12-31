import { useField } from "formik";

interface InputFormikProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputForm = ({
  label,
  id,
  name,
  type,
  placeholder,
  required,
}: InputFormikProps) => {
  const [field, meta] = useField({ name, id, type, placeholder, required });

  return (
    <div className="flex flex-col text-l  gap-1 mb-5">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        {...field}
        aria-required={required}
        aria-invalid={meta.error && meta.touched ? true : false}
        placeholder={placeholder}
        type={type}
        aria-describedby={`${name}-error`}
        className="p-4 transition-all w-full   bg-white border border-gray-500 rounded-sm outline-none focus:border-blue-500"
      />

      {meta.touched && meta.error && (
        <p
          id={`${name}-error`}
          role="alert"
          aria-live="polite"
          className="text-sm text-red-500"
        >
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default InputForm;
