"use client";
import styles from './sign_in.module.css';

export default function SignIn({signIn} : {signIn: (formData: FormData) => Promise<never>}) {

      return (
        <div className={styles.container}>
            <form className={styles.form_container}>
              <label htmlFor="email">
                Email
              </label>
              <input
                name="email"
                placeholder="you@example.com"
                required
              />
              <label htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />

              <button formAction={signIn} type="submit">
                SIGN IN
              </button>
            </form>
        </div>
      );
}