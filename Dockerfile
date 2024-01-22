FROM node:latest

WORKDIR /app

COPY yarn.lock .eslintrc.js package.json tsconfig.json config-overrides.js .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]
