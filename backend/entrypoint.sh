#!/bin/sh

echo "DATABASE_URL: $DATABASE_URL"

echo "Waiting for database to be ready..."
while ! nc -z db 3306; do
  sleep 1
done

echo "Generating Prisma client..."
npx prisma generate

echo "Creating initial migration if not exists..."
if [ ! -d "prisma/migrations" ] || [ -z "$(ls -A prisma/migrations)" ]; then
  npx prisma migrate dev --name init --create-only
fi

echo "Running Prisma migrations..."
npx prisma migrate deploy

if [ $? -ne 0 ]; then
    echo "Prisma migration failed"
    exit 1
fi

echo "Starting the application..."
node dist/app.js