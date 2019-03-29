# socialblade-tool
A promise based tool to return some social blade metric on youtube channels

[![Node version](https://img.shields.io/node/v/socialblade-tool.svg?style=flat)](http://nodejs.org/download/)

## Install
```
npm i socialblade-tool
```

## Example
```javascript 1.8
const socialbladeTool=require('socialblade-tool'),

socialbladeTool.getSocialBladeMetrics(<channel id>).then(function (metrics) {
    console.log(metrics)
})
```
