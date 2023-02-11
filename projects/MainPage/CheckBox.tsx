import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { animated, useSpring } from "react-spring";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength
  });

  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#808" : "#fff",
    borderColor: isChecked ? "#808" : "#ddd"
  });

  return (
    <label>
      <input
        className={styles.checkbox_hide}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <animated.svg
        className={styles.checkbox}
        style={checkboxAnimationStyle}
        viewBox="0 0 15 11"
        fill="none"
        aria-hidden="true"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
          ref={(ref: any) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
        />
        </animated.svg>
      Don't you dare to check me!
    </label>
  );
}

export default CheckBox