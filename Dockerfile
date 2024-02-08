FROM node:20
RUN mkdir -p /home/app
COPY . /home/app
EXPOSE 3003
CMD ["node", "/home/app/index.js"]