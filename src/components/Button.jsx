import { MdEmail } from "react-icons/md";

function Button({ name }) {
  return (
    <button className="btn">
      <MdEmail />
      {name}
    </button>
  );
}

export default Button;
