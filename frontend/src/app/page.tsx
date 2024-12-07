import { css } from "styled-system/css";
import todoLogo from "@/public/images/logo/todo.svg";
import Image from "next/image";
import { Divider } from "@/components/base/atoms/Divider";
import { TodoList } from "@/components/domain/Todo/molecules/TodoList";
import { TodoCreateForm } from "@/components/domain/Todo/molecules/TodoCreateForm";

const rootStyle = css({
  margin: "0 auto",
});

const logoStyle = css({
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});

const todosStyle = css({
  display: "flex",
  justifyContent: "center",
});

const dividerStyle = css({
  width: "80%",
  marginTop: "2rem",
  margin: "0 auto",
});

const Home = () => {
  return (
    <div className={rootStyle}>
      <div className={logoStyle}>
        <Image className={logoStyle} src={todoLogo} alt="logo" />
      </div>
      <div>
        <TodoCreateForm />
        <div className={dividerStyle}>
          <Divider />
        </div>
        <div className={todosStyle}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
