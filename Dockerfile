ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-slim

WORKDIR "/server"

COPY ./server ./

RUN npm install

WORKDIR "/svelte"

COPY ./svelte ./

RUN npm install
RUN npm run build

WORKDIR "/server"

ENV NODE_ENV="production"
ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "start" ]
