import React, { useState } from "react";
import Select from "react-tailwindcss-select";
const options = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];
export default function LanguageSelector({ change }: any) {
  const [lang, setLang] = useState({ value: "en", label: "EN" });
  const handleChange = (value: any) => {
    setLang(value);
    change(value.value);
  };
  return (
    <div className="font-chakrapetch w-[80px] rounded-[4px] text-[18px]">
      <Select
        primaryColor={"#3d4db5"}
        classNames={{
          menuButton: ({ isDisabled }: { isDisabled?: boolean } = {}) =>
            `flex text-sm text-white font-chakrapetch border border-[#3d4db5] rounded-none shadow-sm transition-all duration-200 focus:outline-none ${
              isDisabled ? "bg-[#0c1226]" : "bg-[#3d4db5] hover:bg-[#4e5cdb]"
            }`,
        }}
        value={lang}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
