const request = require('request');
const host = 'https://backend.dev.fashionipo.com';
const searchPath = '/backend-user-server/v1/resource/search?size=10000';
const postPath = '/backend-user-server/v1/resource/add-resource';
const token = 'vlKsJ7luCJ3zh_mlo4nxsLSn8EAFg4dQ9kuoDYNGG1hgYFtjY02YBZp1v22HR6k17ZabZne99_cWaRKuZQNZa1KctpayVCWz9NfronreASbOSH1HMdGodBZbuobx64YcZUGnj91x1muduOCf1L916GuaWfbCQ8__g-dQ6aPevpo=';
let pro = Promise.resolve();

const woofManMenu = require('./woofmanMenu');

// contents(woofManMenu);
menus(woofManMenu);

function contents(data) {
    data.menus.forEach(function (element, index) {
        pro = pro.then(function () {
            return post(host + postPath, {
                "name": element.name,
                "parentId": 4,
                "sort": index,
                "isMenu": 1,
                "isAuth": 0,
                "upstreamPath": JSON.stringify({uri: element.router, icon: element.icon}),
                "description": "1"
            })
        })
    })
}

function menus(data) {
    const arr = {};
    data.menus.forEach(function (obj) {
        arr[obj.name] = {children: obj.children};
    });

    get(host + searchPath).then(function (result) {
        JSON.parse(result).data.data[2].children.forEach(function (obj) {
            arr[obj.name].id = obj.id;
        });
        return arr
    }).then(function (result) {
        for (let key in result) {
            result[key].children.forEach(function (child, index) {
                pro = pro.then(function () {
                    return post(host + postPath, {
                        "name": child.name,
                        "parentId": result[key].id,
                        "sort": index,
                        "isMenu": 1,
                        "isAuth": 0,
                        "upstreamPath": JSON.stringify({uri: child.router}),
                        "description": "2"
                    })
                })
            });
        }
    })
}

function get(url) {
    return new Promise(function (resolve, reject) {
        request({
            uri: url,
            method: 'GET',
            headers: {'x-auth-token': token}
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

function post(url, body) {
    return new Promise(function (resolve, reject) {
        request({
            uri: url,
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'x-auth-token': token}
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    });
}
