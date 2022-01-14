from node:16.13.1-alpine3.14

expose 3000

workdir /app
copy . .

volume ./ /app

run yarn install

cmd ["yarn", "start"]
