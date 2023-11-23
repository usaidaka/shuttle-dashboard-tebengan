const TimePicker = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <form action="">
      <label htmlFor="">{label}</label>
      <div className="overflow-hidden flex justify-center items-center focus-within:border-cyan-600 focus-within:ring-cyan-600 rounded-lg border-2 w-full">
        <div className="flex items-center w-full">
          <input
            type="time"
            name=""
            id=""
            placeholder={placeholder}
            className="border-transparent focus:border-transparent focus:ring-0 text-sm py-2 px-3 border-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" name="" id="" />
        <p>Anytime</p>
      </div>
    </form>
  );
};

export default TimePicker;
