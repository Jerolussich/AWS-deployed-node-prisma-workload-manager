FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY prisma ./prisma

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install
RUN npm i -g prisma

# Bundle app source
COPY . .

RUN npm run build

RUN prisma generate

RUN npx prisma migrate deploy

EXPOSE 8080

CMD [ "node", "./dist/server.js" ]
