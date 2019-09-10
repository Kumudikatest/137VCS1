let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    //ktest
    //hirudinee 1234

    ddb.get({
        TableName: 'BTMenu',
        Key: {
            'itemCode': 'hh tets'
        }
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

    callback(null, { "message": "Successfully executed" });
}