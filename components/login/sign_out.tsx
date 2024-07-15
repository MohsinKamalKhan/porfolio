"use client";
import { type ComponentProps } from "react";
import styles from './sign_out.module.css';

type Props = ComponentProps<"button">;

export default function SignOut({ ...props }: Props) {

  return (
    <form className={styles.form_container}>
    <button className={styles.button}  {...props} type="submit">
      SIGN OUT
    </button>
    </form>
  );
}
