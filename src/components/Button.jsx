// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
