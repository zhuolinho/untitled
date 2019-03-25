const request = require('request');
const host = 'https://backend.dev.fashionipo.com';
const searchPath = '/backend-user-server/v1/resource/search?size=10000';
const postPath = '/backend-user-server/v1/resource/add-resource';
const token = '6d8e16f2-0608-4459-938d-a032fb93f163';
let pro = Promise.resolve();

// const woofManMenu = require('./woofmanMenu');
const actmanMenu = require('./actmanMenu');

// contents(actmanMenu);
// menus(actmanMenu);
resources(actmanMenu);

function contents(data) {
    data.menus.forEach(function (element, index) {
        pro = pro.then(function () {
            return post(host + postPath, {
                "name": element.name,
                "parentId": 249,
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
                        "routeId": "0d97b129-bce9-4749-8ebf-44e667438a41",
                        "serviceId": "f5c5ba0e-a9e4-4e8b-8935-e55e429b0852",
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
