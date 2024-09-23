### マイグレーション 
```
docker-compose exec db mysql -u root -p
```
> rootpassword

```
SHOW GRANTS FOR 'todo_user'@'%';
GRANT ALL PRIVILEGES ON todo_db.* TO 'todo_user'@'%';
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'todo_user'@'%';
FLUSH PRIVILEGES;
EXIT;
```

```
docker-compose exec backend sh
```

```
npx prisma migrate dev --name init
```

```
docker-compose restart backend
```

```
docker-compose exec backend sh
npx prisma migrate dev --name init
````
### curl で検証
```
curl http://localhost:3001/api/todos
```
> []

```
curl -X POST -H "Content-Type: application/json" -d '{"title":"新しいTodo"}' http://localhost:3001/api/todos
```
> [{"id":1,"title":"新しいTodo","completed":false,"createdAt":"2024-09-23T06:07:27.227Z","updatedAt":"2024-09-23T06:07:27.227Z"}]%

