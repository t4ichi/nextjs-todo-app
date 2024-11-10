"use client";
import { css } from "styled-system/css";
import { TextInput } from "@/components/base/atoms/TextInput";
import { Button } from "@/components/base/atoms/Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export type LoginFormPresentationalProps = {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
};

const styles = {
  container: css({
    textAlign: "center",
  }),
  formContainer: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  }),
  logo: css({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  }),
};

export const LoginFormPresentational = ({
  register,
  errors,
  onSubmit,
  isLoading = false,
}: LoginFormPresentationalProps) => (
  <div className={styles.container}>
    <div className={styles.logo}>{/* ロゴコンポーネント */}</div>
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <TextInput
        {...register("email")}
        type="email"
        placeholder="メールアドレス"
        error={errors.email?.message}
      />
      <TextInput
        {...register("password")}
        type="password"
        placeholder="パスワード"
        error={errors.password?.message}
      />
      <Button type="submit" disabled={isLoading}>
        ログイン
      </Button>
    </form>
  </div>
);
