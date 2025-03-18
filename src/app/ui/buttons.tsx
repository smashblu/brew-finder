'use client';

import '@/styles/main.css';

export function FormLabel({ text, style, htmlfor }) {
  return (
    <label htmlFor={htmlfor} className={style}>
      {text}
    </label>
  );
}

export function FormButton({ text, style, handleClick }) {
  return <button className={style}>{text}</button>;
}

export function FormInput({ type, style, id, placeholder }) {
  return (
    <input
      name="zip"
      type={type}
      className={style}
      id={id}
      placeholder={placeholder}
    ></input>
  );
}
