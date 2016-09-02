FROM node:6.5.0-wheezy

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME
RUN npm install

CMD ["./node_modules/.bin/mocha", "test", "--watch"]
