import React from 'react'

function Field({ name, placeholder, value, label, onChange, type,error }) {
    return (
 
      <div className="flex flex-col gap-3 lg:gap-2">
      <label htmlFor={name} className="font-[100] text-[1.2rem]">
          {label}
      </label>
      <input
      autoComplete='new-password'
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="outline-none bg-[#000] border-bgrey border-b-[0.5px] text-[0.9rem]  py-2 placeholder:text-bgrey    text-[#fff]"
        onChange={onChange}
      />
      {error  && (
          <p className="text-[#EF0107] font-[300] text-[0.8rem]">
            *{error.toLowerCase()}
          </p>
        )}
    </div>
        );
      };
  
  
  export default Field