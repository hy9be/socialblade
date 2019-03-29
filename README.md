# socialblade-tool
A promise based tool to return some social blade metric on youtube channels

```javascript 1.8
const socialbladeTool=require('socialblade-tool'),

socialbladeTool.getSocialBladeMetrics(<channel id>).then(function (metrics) {
    console.log(metrics)
})
```
