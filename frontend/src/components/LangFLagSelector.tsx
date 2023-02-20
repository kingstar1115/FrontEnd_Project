import React, { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
const { SingleValue, Option } = components;

const options = [
  {
    value: 'en',
    label: 'EN',
    image: "/assets/images/flags/en.png",
  },
  {
    value: 'es',
    label: 'ES',
    image: "/assets/images/flags/es.png",
  },
];

export default function LangFLagSelector({ change }: any) {
  const [lang, setLang] = useState(options[0]);

  const { SingleValue, Option } = components;

  const IconSingleValue = (props: any) => (
    <SingleValue {...props}>
      <img src={props.data.image} style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '10px' }} />
      {props.data.label}
    </SingleValue>
  );

  const IconOption = (props: any) => (
    <Option {...props}>
      <img src={props.data.image} style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '10px' }} />
      {props.data.label}
    </Option>
  );
  const handleChange = (value: any) => {
    setLang(value);
    change(value.value);
  }

  return (
    <div className="custom-select-flg">
      <Select
        defaultValue={lang}
        // value={lang}
        onChange={(e) => handleChange(e)}
        options={options}
        className="select-custom"
        formatOptionLabel={option => {
          let imgURL = "/assets/images/flags/" + option.value + ".png";
          return (
            <div className='flex justify-around rounded-none bg-transparent'>
              {option.image ? <img src={imgURL} className="w-[20px] h-auto" /> : ''}
              <span>{option.label}</span>
            </div>
          )
        }}
      />
      {/* <Select
        components={SingleValue: IconSingleValue, Option: IconOption }
      options={options}
    /> */}

    </div>
  );
}