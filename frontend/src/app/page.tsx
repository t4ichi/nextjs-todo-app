import { css } from "styled-system/css";
import todoLogo from "@/public/images/logo/todo.svg";
import Image from "next/image";
import { TextInput } from "@/components/base/atoms/TextInput";
import { Button } from "@/components/base/atoms/Button";
import { Divider } from "@/components/base/atoms/Divider";
import { getAllTodos } from "./api/fetchTodos";
import { TodoList } from "@/components/domain/Todo/molecules/TodoList";

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

const createFormStyle = css({
	display: "flex",
	justifyContent: "center",
	gap: "0.5rem",
	marginTop: "1em",
});

const Home = async () => {
	const todos = await getAllTodos();

	return (
		<div className={rootStyle}>
			<div className={logoStyle}>
				<Image className={logoStyle} src={todoLogo} alt="logo" />
			</div>
			<div>
				<div className={createFormStyle}>
					<TextInput placeholder="タスクを入力" />
					<Button type="submit">追加</Button>
				</div>
				<div className={dividerStyle}>
					<Divider />
				</div>
				<div className={todosStyle}>
					<TodoList todos={todos} />
				</div>
			</div>
		</div>
	);
};

export default Home;
