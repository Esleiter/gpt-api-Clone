FROM node:20
RUN mkdir -p /home/app
COPY . /home/app
RUN npm install
EXPOSE 3003
CMD ["node", "/home/app/app/app.js"]