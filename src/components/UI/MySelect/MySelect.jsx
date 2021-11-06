import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import classes from "./MySelect.module.css";

const animatedComponents = makeAnimated();

const MySelect = ({ options, onChangeVal, ...props }) => {
  const [values, setValues] = useState();

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[1], options[3]]}
      isMulti
      onChange={onChangeVal}
      options={options}
    />
    // <select
    //   {...props}
    //   value={value}
    //   onChange={(event) => onChange(event.target.value)}
    //   className={classes.select}
    // >
    //   <option disabled className={classes.option} value="">
    //     {defaultValue}
    //   </option>
    //   {options.map((option) => (
    //     <option
    //       key={option.value}
    //       value={option.value}
    //       className={classes.option}
    //     >
    //       {option.name}
    //     </option>
    //   ))}
    // </select>
  );
};

export default MySelect;
