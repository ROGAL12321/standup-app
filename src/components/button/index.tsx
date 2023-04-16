import styles from "./button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  centered?: boolean;
};

export default function Button({ onClick, children, centered }: ButtonProps) {
  const buttonClassNames = `
    ${styles.button}
    ${centered ? styles.centered : ""}
  `;

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
}
