function FieldBorder({ name, placeholder, value, label, onChange, type }) {
    return (
      <div className="flex flex-col gap-3 lg:gap-2">
        <label htmlFor={name} className="font-[100] text-[1rem]">
            {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className="outline-none bg-[#000] border-bgrey border-[0.5px] rounded-md text-[0.9rem]  py-2 px-4 placeholder:text-bgrey    text-[#fff]"
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default FieldBorder