import React from "react";
import IocSearch from "@/../../public/icon/icon-search.svg";
import styles from "./_css/search.module.css";
import Icon from "./Icon";

type SearchProps = {
  placeholder?: string;
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  errorMessage?: string;
  minLength?: number;
  bgColor?: string;
  iconRight?: boolean;
};

export default function Search({
  fontSize,
  placeholder,
  value,
  onClick,
  onChange,
  onKeyDown,
  onKeyUp,
  width,
  height,
  margin,
  errorMessage,
  minLength,
  bgColor = "#fff",
  iconRight = false,
}: SearchProps) {
  return (
    <div
      className={styles.component}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        margin: margin,
        backgroundColor: bgColor,
      }}
    >
      <button
        className={!iconRight ? styles.button : styles.button_right}
        onClick={onClick}
        type="button"
      >
        <Icon
          width={"20px"}
          height={"20px"}
          src={IocSearch}
          alt="검색 아이콘"
        />
      </button>
      <input
        className={`${
          !iconRight ? styles.input : styles.input_right
        } elipsis_1_lines`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        minLength={minLength}
      />

      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
}
