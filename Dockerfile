FROM node:14.17-alpine

WORKDIR /usr/ms_lubycash

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3339

CMD ["yarn", "dev"]