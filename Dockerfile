FROM node:latest

WORKDIR /app

# RUN git clone https://github.com/EpsyUwU/GUARDIAN_PROTOCOL_NEW.git .

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "run", "start"]
