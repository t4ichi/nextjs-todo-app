import { Todos } from "@/components/domain/todo/molecules/Todos";
import { css } from "styled-system/css";
import { getTodos } from "./api";
import todoLogo from "@/public/images/logo/todo.svg";
import Image from "next/image";
import { TextInput } from "@/components/base/atoms/TextInput";
import { Button } from "@/components/base/atoms/Button";
import { Divider } from "@/components/base/atoms/Divider";

const logoStyle = css({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});

const todosStyle = css({
  display: "flex",
  justifyContent: "center",
});

const Home = async () => {
  const todos = await getTodos();

  return (
    <div>
      <div
        className={css({
          width: "100%",
        })}
      ></div>
      <div className={logoStyle}>
        <Image src={todoLogo} alt="logo" />
      </div>
      <div
        className={css({
          textAlign: "center",
        })}
      >
        <div className={todosStyle}>
          <div
            className={css({
              display: "flex",
              gap: "0.5rem",
              marginTop: "1em",
            })}
          >
            <TextInput placeholder="タスクを入力" />
            <Button>追加</Button>
          </div>
        </div>

        <div
          className={css({
            width: "80%",
            marginTop: "2rem",
            margin: "0 auto",
          })}
        >
          <Divider />
        </div>
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default Home;
