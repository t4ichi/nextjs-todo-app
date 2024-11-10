"use client";
import { css } from "styled-system/css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@/components/base/atoms/TextInput";
import { Button } from "@/components/base/atoms/Button";

const loginSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上で入力してください"),
});

type LoginFormData = z.infer<typeof loginSchema>;

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
  divider: css({
    width: "80%",
    margin: "2rem auto",
  }),
  logo: css({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  }),
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Handle login logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
          <TextInput
            placeholder="メールアドレス"
            {...register("email")}
            error={errors.email?.message}
          />
          <TextInput
            placeholder="パスワード"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Button type="submit">ログイン</Button>
        </div>
      </form>
      <div className={styles.divider} />
    </div>
  );
};

export default Login;
