import type { ButtonProps } from "./button-model";
import styles from "./Button.module.css";
export default function Button({title,type, onClick : onClickAction}: ButtonProps){

  const primaryBtn = <button className={styles["cta"]}>
              <span>{title}</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>;

  const secondaryBtn = <button onClick={onClickAction} className={styles[type]}>{title}</button>;

  switch(type) {
    case "primaryBtn":
      return primaryBtn;
    
    case "secondaryBtn":
      return secondaryBtn;
  }

    

}