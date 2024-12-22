/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Todo API
 * Todo アプリケーションのAPI仕様
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { CreateTodoBody, EditTodoBody, Todo } from "../../models";
import { apiClient } from "../../../lib/axios";

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * 論理削除されていない全てのTodoアイテムを取得します
 * @summary Todo一覧の取得
 */
export const getAllTodos = (signal?: AbortSignal) => {
  return apiClient<Todo[]>({ url: `/api/todos`, method: "GET", signal });
};

export const getGetAllTodosQueryKey = () => {
  return [`/api/todos`] as const;
};

export const getGetAllTodosQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllTodos>>,
  TError = void,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getAllTodos>>,
    TError,
    TData
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllTodosQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllTodos>>> = ({
    signal,
  }) => getAllTodos(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllTodos>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetAllTodosQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllTodos>>
>;
export type GetAllTodosQueryError = void;

/**
 * @summary Todo一覧の取得
 */

export function useGetAllTodos<
  TData = Awaited<ReturnType<typeof getAllTodos>>,
  TError = void,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getAllTodos>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetAllTodosQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * 新しいTodoアイテムを作成します
 * @summary 新規Todoの作成
 */
export const createTodo = (
  createTodoBody: CreateTodoBody,
  signal?: AbortSignal,
) => {
  return apiClient<Todo>({
    url: `/api/todos`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createTodoBody,
    signal,
  });
};

export const getCreateTodoMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createTodo>>,
    TError,
    { data: CreateTodoBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createTodo>>,
  TError,
  { data: CreateTodoBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createTodo>>,
    { data: CreateTodoBody }
  > = (props) => {
    const { data } = props ?? {};

    return createTodo(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateTodoMutationResult = NonNullable<
  Awaited<ReturnType<typeof createTodo>>
>;
export type CreateTodoMutationBody = CreateTodoBody;
export type CreateTodoMutationError = void;

/**
 * @summary 新規Todoの作成
 */
export const useCreateTodo = <TError = void, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createTodo>>,
    TError,
    { data: CreateTodoBody },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof createTodo>>,
  TError,
  { data: CreateTodoBody },
  TContext
> => {
  const mutationOptions = getCreateTodoMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 指定されたIDのTodoを更新します
 * @summary Todoの更新
 */
export const editTodo = (id: number, editTodoBody: EditTodoBody) => {
  return apiClient<Todo>({
    url: `/api/todos/${id}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: editTodoBody,
  });
};

export const getEditTodoMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof editTodo>>,
    TError,
    { id: number; data: EditTodoBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof editTodo>>,
  TError,
  { id: number; data: EditTodoBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof editTodo>>,
    { id: number; data: EditTodoBody }
  > = (props) => {
    const { id, data } = props ?? {};

    return editTodo(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type EditTodoMutationResult = NonNullable<
  Awaited<ReturnType<typeof editTodo>>
>;
export type EditTodoMutationBody = EditTodoBody;
export type EditTodoMutationError = void;

/**
 * @summary Todoの更新
 */
export const useEditTodo = <TError = void, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof editTodo>>,
    TError,
    { id: number; data: EditTodoBody },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof editTodo>>,
  TError,
  { id: number; data: EditTodoBody },
  TContext
> => {
  const mutationOptions = getEditTodoMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * 指定されたIDのTodoを論理削除します
 * @summary Todoの削除
 */
export const deleteTodo = (id: number) => {
  return apiClient<Todo>({ url: `/api/todos/delete/${id}`, method: "PUT" });
};

export const getDeleteTodoMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteTodo>>,
    TError,
    { id: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteTodo>>,
  TError,
  { id: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteTodo>>,
    { id: number }
  > = (props) => {
    const { id } = props ?? {};

    return deleteTodo(id);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteTodoMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteTodo>>
>;

export type DeleteTodoMutationError = void;

/**
 * @summary Todoの削除
 */
export const useDeleteTodo = <TError = void, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteTodo>>,
    TError,
    { id: number },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteTodo>>,
  TError,
  { id: number },
  TContext
> => {
  const mutationOptions = getDeleteTodoMutationOptions(options);

  return useMutation(mutationOptions);
};
