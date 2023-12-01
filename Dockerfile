ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-slim

WORKDIR /server

COPY ./server/package.json ./
RUN npm install

COPY ./server ./

ENV NODE_ENV="production"
ENV PORT=3000
EXPOSE 3000
CMD [ "npm", "run", "start" ]
