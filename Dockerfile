FROM node:14-alpine AS base
# Add a work directory
WORKDIR /app
# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .

FROM base AS development
# Set environment variables
ENV NODE_ENV development
# Install dependencies
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "yarn", "run", "dev" ]

FROM base AS production
# Set environment variables
ENV NODE_ENV production
# Install dependencies without devDependencies
RUN yarn install --production
# Copy app files
COPY . .
# Build project
RUN yarn run build
# Expose port
EXPOSE 4000
# Start the app
CMD [ "yarn", "start" ]
