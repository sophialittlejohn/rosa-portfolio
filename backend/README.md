# Deployment

Backend is deployed on Heruko.

App name: [rosa-cms](https://dashboard.heroku.com/apps/rosa-cms/)

Before starting, make sure you're in the backend directory

- login to heroku CLI `heroku login`
- add, commit and push to the heroku repo `git push heroku master`

# Database

Backend in development and production use the same DB hosted at [Mongo Atlas](https://cloud.mongodb.com/v2/611a966c85c2bd3a4ab52821#clusters).

Images are hosted at [Cloudinary](https://cloudinary.com/console/c-b8caed343b64747bcc3511a413d883).

# Development

Editing content types in the CMS is only possible in development mode (locally).

# Env variables

Environment variables can be found at [Cloudinary](https://cloudinary.com/console/c-b8caed343b64747bcc3511a413d883) and [Mongo Atlas](https://cloud.mongodb.com/v2/611a966c85c2bd3a4ab52821#clusters)

HOST=0.0.0.0
PORT=1337
DATABASE_FILENAME=""
DATABASE_URI=xxx
DATABASE_NAME=xxx
CLOUDINARY_NAME=xxx
CLOUDINARY_KEY=xxx
CLOUDINARY_SECRET=xxx

