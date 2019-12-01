FROM arm32v7/node:10

RUN mkdir -p /service2
WORKDIR /service2

COPY package.json /service2
RUN npm install

COPY . /service2

EXPOSE 5001

CMD [ "node", "server.js" ]