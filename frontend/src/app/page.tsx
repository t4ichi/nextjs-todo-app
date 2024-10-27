import { Todos } from "@/components/domain/todo/molecules/Todos";
import { css } from "styled-system/css";
import { getTodos } from "./api";
import todoLogo from "@/public/images/logo/todo.svg";
import Image from "next/image";

const logoStyle = css({
  display: "flex",
  justifyContent: "center",
  marginTop: "4rem",
});

const todosStyle = css({
  display: "flex",
  justifyContent: "center",
});

const Home = async () => {
  const todos = await getTodos();
  return (
    <div>
      <div className={logoStyle}>
        <Image src={todoLogo} alt="logo" />
      </div>
      <div className={todosStyle}>
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default Home;
