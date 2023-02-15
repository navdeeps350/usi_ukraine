# usi_ukraine

Repo for the website of the Università della Svizzera Italiana Students' Association for Ukraine

## Installation Steps
### Prerequisite
1. This application is tested with Node 16. Please use the same for development.
2. Or if you wsh to maintain multiple node versions on your machine please install nvm, which allows you to switch between node versions.
3. We use WebStorm for development. Please install the IDE best suited for your use.

### Steps
1. Clone the above repository.
2. Run npm install
3. Run npm run build.
4. Run nuxt start

### Docker
We will create and image with name safu, please feel free to chose name of your choice
1. docker build . --tag=safu
2. docker run -it -p 3000:3000 safu
