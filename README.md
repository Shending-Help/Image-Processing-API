The scripts needed to test/start/build your application:

to start the server: npm run start
to test: npm run test
to build: npm run build
to format: npm run prettier
to use eslint: npm run lint

the main entry point would be at src\index.ts: http://localhost:3000/api

endpoints:

the localhost:3000/api/processing/ takes different query parameters namely filename, width and height

example of a url : localhost:3000/api/processing/?filename=fjord.jpg&width=100&height=100
