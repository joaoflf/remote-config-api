FROM node:slim

RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app  
COPY . /usr/src/app

EXPOSE 8000  
RUN npm install  
CMD ["npm", "start"]  