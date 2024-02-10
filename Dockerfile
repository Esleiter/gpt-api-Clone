FROM node:20
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install
EXPOSE 3003
CMD ["node", "app/app.js"]