FROM node:10

RUN mkdir -p /service4
WORKDIR /service4

COPY package.json /service4
RUN npm install

COPY . /service4

EXPOSE 5003

CMD [ "node", "server.js" ]