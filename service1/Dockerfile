FROM arm32v7/node:10

RUN mkdir -p /service1
WORKDIR /service1

COPY package.json /service1
RUN npm install

COPY . /service1

EXPOSE 5000

CMD [ "node", "server.js" ]