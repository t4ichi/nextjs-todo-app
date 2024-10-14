import { Title } from "@/components/base/atoms/Title";
import { Todos } from "@/components/domain/todo/molecules/Todos";
import { css } from "styled-system/css";
import { getTodos } from "./api";

const Home = async () => {
  const todos = await getTodos();
  return (
    <div
      className={css({
        alignItems: "center",
      })}
    >
      <div className={css({ textAlign: "center" })}>
        <Title>タイトル</Title>
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default Home;
