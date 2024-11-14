import styles from "../style";
import { arrowUp } from "../assets";

const GetStared = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`w-[100%] h-[100%] rounded-full bg-primary flex-col ${styles.flexCenter}`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Stared</span>
      </p>
    </div>
  </div>
);

export default GetStared;
