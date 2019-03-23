FROM node:10.13-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD npm start