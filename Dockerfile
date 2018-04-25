FROM node:8-alpine

COPY server.js /server.js
EXPOSE 8080

CMD node /server.js
