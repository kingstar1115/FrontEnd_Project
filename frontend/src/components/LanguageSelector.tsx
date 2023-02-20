import React, { useState } from "react";
import Select from "react-tailwindcss-select";
const options = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];
export default function LanguageSelector({change}:any) {
  const [lang, setLang] = useState({value:"en", label:"EN"});
  const handleChange = (value: any) => {
    setLang(value);
    change(value.value);
  }
  return (
    <div className="font-chakrapetch w-[80px] rounded-[4px] text-[18px]">
      <Select
        primaryColor={"#3d4db5"}
        classNames={{
          menuButton: ({ isDisabled }) => (
            `flex text-sm text-white font-chakrapetch border border-[#3d4db5] rounded-none shadow-sm transition-all duration-200 focus:outline-none ${isDisabled
              ? "bg-[#0c1226]"
              : "bg-[#0c1226] focus:ring focus:ring-blue-500/20"
            }`
          ),
          menu: "absolute z-10 font-chakrapetch w-full bg-[#0c1226] shadow-lg border-none py-1 mt-1 text-sm text-gray-700 lang-selector-menu",
          listItem: ({ isSelected }) => (
            `block transition font-chakrapetch duration-200 px-2 py-2 cursor-pointer select-none truncate rounded-none ${isSelected
              ? `text-white bg-[#0c1226] hover:bg-transparent hover:text-[#3d4db5]`
              : `text-white hover:bg-transparent hover:text-[#3d4db5]`
            }`
          )
        }}
        value={lang}
        onChange={handleChange}
        options={options}
      />
    </div>
  )
}