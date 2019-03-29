const socialbladeTool=require('../src/index'),
    assert = require('assert')

const testingChannels = ['UCgNg3vwj3xt7QOrcIDaHdFg', 'UCVYamHliCI9rw1tHR1xbkfw']

socialbladeTool.getSocialBladeMetrics(testingChannels[0]).then(function (metrics) {
    assert(metrics.grade === 'B')
})