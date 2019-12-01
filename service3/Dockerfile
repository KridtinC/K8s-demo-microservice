FROM node:10

RUN mkdir -p /service3
WORKDIR /service3

COPY package.json /service3
RUN npm install

COPY . /service3

EXPOSE 5002

CMD [ "node", "server.js" ]