const fakeUa = require('fake-useragent'),
    request = require('request'),
    cheerio = require('cheerio'),
    _ = require('lodash')

exports.getSocialBladeMetrics = function(channel_id) {
    // Return new promise
    return new Promise(function(resolve, reject) {

        const url = 'https://socialblade.com/youtube/channel/' +  channel_id
        const headers = {
            'User-Agent': fakeUa()
        }

        // Do async query
        request.get({url: url, headers: headers}, function (err, r, body) {
            if (!err) {
                const $ = cheerio.load(body)

                const grade = $('body > div:nth-child(17) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1) > span').text()
                const sub_rank = $('#afd-header-subscriber-rank').text()
                const view_rank = $('#afd-header-videoview-rank').text()
                const last30d_views = $('#afd-header-views-30d').text()
                const last30d_sub = $('#afd-header-subs-30d').text()
                const monthly_earn = $('body > div:nth-child(17) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > p:nth-child(1)').text()
                const yearly_earn = $('body > div:nth-child(17) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)').text()

                let result = {
                    grade: grade,
                    sub_rank: sub_rank,
                    view_rank: view_rank,
                    last30d_views: last30d_views.slice(1, -1),
                    last30d_sub: last30d_sub.slice(1),
                    monthly_earn: monthly_earn.slice(1),
                    yearly_earn: yearly_earn.slice(1)
                }

                //Remove all unnecessary chars
                resolve(_.mapValues(result, v => v.replace(/[\n,]/g, '').trim()))
            } else {
                reject(err);
            }
        })
    })
}
