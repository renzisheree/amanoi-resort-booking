import React, { useEffect, useState } from "react";
import { useField } from "formik";
import withClickOutside, {
  WithClickOutsideProps,
} from "../utils/withClickOutside";

interface DropdownItem {
  id: string | number;
  text: string;
  value: string | number;
}

interface Props extends WithClickOutsideProps {
  labelText: string;
  name: string;
  data: DropdownItem[];
  dropdownLabel?: string;
  setValue: (field: string, value: unknown) => void;
}

const DropdownFormik: React.FC<Props> = ({
  labelText,
  name,
  data,
  dropdownLabel = "Select your job",
  setValue,
  show,
  setShow,
  nodeRef,
}) => {
  const [label, setLabel] = useState(dropdownLabel);
  const [field, meta] = useField<string>({ name });

  const handleClickDropdownItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setValue(name, target.dataset.value);
    setShow(false);
    setLabel(target.textContent as string);
  };

  useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value, dropdownLabel]);

  return (
    <div className="flex flex-col gap-3 mb-5 ">
      <label className="cursor-pointer">{labelText}</label>

      <div className="relative" ref={nodeRef}>
        <div
          className="z-20 flex items-center justify-between p-5 bg-white border cursor-pointer border-gray100"
          onClick={() => setShow(!show)}
        >
          <span className="w-full">
            {label}
            <svg
              className="float-right w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </span>
        </div>

        <div
          className={`absolute top-full left-0 z-30 w-full rounded-lg bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <div
                className="p-5 cursor-pointer hover:bg-gray-100"
                onClick={handleClickDropdownItem}
                data-value={item.value}
                key={item.id}
              >
                {item.text}
              </div>
            ))}
        </div>
      </div>

      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default withClickOutside<Props>(DropdownFormik);
