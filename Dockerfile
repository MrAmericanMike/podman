ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-slim

WORKDIR "/server"

COPY ./server ./

RUN npm install

ENV NODE_ENV="production"
ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "start" ]
