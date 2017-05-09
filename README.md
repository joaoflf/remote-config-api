# Remote Config API

## About
An express/mongo based backend to support [remote-config-dashboard](https://github.com/joaoflf/remote-config-dashboard).

## Development
Start your mongo server and run `npm start` to launch the express server on port 8000. The API is routed through /api/... `e.g. http://localhost:8000/api/login`.

Alternatively you can just run `docker-compose up` that will spin up two containers, one for the express app and another for the mongo server.
You may have to add `/data` to your shared docker folders (docker preferences> file sharing).
