const InputPhone = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value on input search", e.target.value);
  };
  return (
    <div>
      <label htmlFor="">{label}</label>
      <div className="overflow-hidden flex justify-center items-center focus-within:border-cyan-600 focus-within:ring-cyan-600 rounded-lg border-2 w-full">
        <select name="" id="" className="bg-inherit">
          <option>+62</option>
        </select>
        <form action="" className="flex items-center w-full">
          <input
            type="text"
            name={"name"}
            id={"id"}
            className="border-transparent focus:border-transparent focus:ring-0 text-sm py-2 px-3 border-none w-full"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default InputPhone;
