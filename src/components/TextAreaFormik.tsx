import { useField } from "formik";

interface TextAreaFormikProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const TextAreaFormik = ({
  label,
  id,
  name,
  placeholder,
  required,
}: TextAreaFormikProps) => {
  const [field, meta] = useField({ name, id, placeholder, required });

  return (
    <div className="flex flex-col text-l gap-3 mb-5">
      <label htmlFor={id}>{label}</label>

      <textarea
        id={id}
        {...field}
        aria-required={required}
        aria-invalid={meta.error && meta.touched ? true : false}
        placeholder={placeholder}
        aria-describedby={`${name}-error`}
        className="p-4 transition-all  bg-white border border-gray-500 rounded-sm outline-none focus:border-blue-500"
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

export default TextAreaFormik;
