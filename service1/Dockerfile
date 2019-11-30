FROM node:10

RUN mkdir -p /service1
WORKDIR /service1

COPY package.json /service1
RUN npm install

EXPOSE 5000

CMD [ "nodemon", "server.js" ]