const request = require('request');
const host = 'https://backend.dev.fashionipo.com';
const searchPath = '/backend-user-server/v1/resource/search?size=10000';
const postPath = '/backend-user-server/v1/resource/add-resource';
const token = '9b4b70ff-480c-48a0-ab8a-e3150f727ce8';
let pro = Promise.resolve();

// const woofManMenu = require('./woofmanMenu');
// const actmanMenu = require('./actmanMenu');
// const storemanMenu = require('./storemanMenu');


// contents(storemanMenu);
// menus(storemanMenu);
resources(storemanMenu);

function contents(data) {
    data.menus.forEach(function (element, index) {
        pro = pro.then(function () {
            return post(host + postPath, {
                "name": element.name,
                "parentId": 308,
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
        JSON.parse(result).data.data[3].children.forEach(function (obj) {
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

function resources(data) {
    const arr = {};
    data.menus.forEach(function (obj) {
        obj.children.forEach(function (obj) {
            arr[obj.name] = {children: obj.children};
        })
    });
    get(host + searchPath).then(function (result) {
        JSON.parse(result).data.data[3].children.forEach(function (obj) {
            obj.children.forEach(function (obj) {
                arr[obj.name].id = obj.id;
            })
        });
        return arr;
    }).then(function (result) {
        for (let key in result) {
            result[key].children.forEach(function (child, index) {
                pro = pro.then(function () {
                    return post(host + postPath, {
                        "routeId": "95d9dc00-9a86-4456-bf8b-2f872d682137",
                        "serviceId": "d2369c25-44e6-4eb4-8a7b-9cc06fa99224",
                        "name": child.name,
                        "parentId": result[key].id,
                        "sort": index,
                        "isMenu": 0,
                        "isAuth": 1,
                        "method": child.method,
                        "upstreamPath": child.uri,
                        "description": "3"
                    })
                })
            });
        }
    });
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
