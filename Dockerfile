FROM node:16.19.0-alpine

USER root

WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000


CMD ["npm", "start"]