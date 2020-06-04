# onejames

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#upload all files to production
aws-deploy --env production --path dist

#upload all files, ignoring the statis folder
aws-deploy --env development --path dist
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Additional information on the S3 uploader: https://www.npmjs.com/package/aws-deploy-script-fe?activeTab=readme
