const request = require('request');
const host = 'https://backend.dev.fashionipo.com';
const searchPath = '/backend-user-server/v1/resource/search?size=10000';
const postPath = '/backend-user-server/v1/resource/add-resource';
let pro = Promise.resolve();

const woofManMenu = require('./woofmanMenu');
// console.log(data);

f(woofManMenu);

function f(data) {
    const arr = {};
    data.menus.forEach(function (obj) {
        obj.children.forEach(function (obj) {
            arr[obj.name] = {children: obj.children};
        })
    });
    get(host + searchPath).then(function (result) {
        JSON.parse(result).data.data[2].children.forEach(function (obj) {
            obj.children.forEach(function (obj) {
                arr[obj.name].id = obj.id;
            })
        });
        return arr;
    }).then(function (result) {
        for (let key in result) {
            result[key].children.forEach(function (child, index) {
                pro = pro.then(function () {
                    // console.log(child);result[key].id
                    return post(host + postPath, {
                        "apiId": "5c16a394-5a30-411f-b1d4-b604fd3cdc13",
                        "name": child.name,
                        "parentId": result[key].id,
                        "sort": index,
                        "isMenu": 0,
                        "isAuth": 1,
                        "method": child.method,
                        "upstreamPath": child.uri,
                        "description": child.description
                    })
                })
            });
        }
    });
}

// function search(url) {
//     pro = pro.then(function () {
//         return get(host + url).then(function (res) {
//             res.match(/HREF="(.*)"/g).forEach(function (str, index) {
//                 if (index) {
//                     // search(url + str.match(/HREF="(.*)"/)[1]);
//                     let href = str.match(/HREF="(.*)"/)[1];
//                     if (/HREF="(.*)\/"/.test(str)) {
//                         fs.mkdir(url + href, function (...args) {
//                             search(url + href);
//                         });
//                     } else {
//                         pro = pro.then(function () {
//                             return save(url + href);
//                         }, function (err) {
//                             console.error(err);
//                         })
//                     }
//                 }
//             });
//         }, function (err) {
//             console.error(err);
//         })
//     })
// }
//
// function save(url) {
//     console.log(url);
//     return new Promise(function (resolve, reject) {
//         request(host + url, function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 resolve(body);
//             } else {
//                 reject(error);
//             }
//         }).pipe(fs.createWriteStream(url))
//     });
// }
//
function get(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
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
            uri: 'https://backend.dev.fashionipo.com/backend-user-server/v1/resource/add-resource',
            method: 'POST',
            body: JSON.stringify(body)
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    });
}
