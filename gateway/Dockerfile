FROM arm32v7/node:10

RUN mkdir -p /gateway
WORKDIR /gateway

COPY package.json /gateway
RUN npm install

COPY . /gateway

EXPOSE 5004

CMD [ "node", "server.js" ]