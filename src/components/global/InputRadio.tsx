type InputRadio = {
  label: string;
  name: string;
  id: string;
};

const InputRadio = ({ label, name, id }: InputRadio) => {
  return (
    <div className="flex items-center gap-1">
      <input type="radio" name={name} id={id} />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default InputRadio;
