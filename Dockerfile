# Set the base image to Node.js 17 with Alpine Linux
FROM node:17-alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Exposing our port
EXPOSE 3000

# Starting our application
CMD npm start