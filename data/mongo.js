const {MongoClient} = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

let client; 

function connect(locals) {

    const uri = process.env.DB_URL

    client = new MongoClient(uri,{useUnifiedTopology: true})

    return client.connect()
    .then((connection) => {
        locals.collectionVG = connection.db('crudProjectGames').collection('video-games')

    })
    .catch(err => {
        console.log(err)
        process.exit()
    }) 

}

function close() {
    client.close()
}

function readAll(info) {

    return info.collection.find(info.query).toArray()
}

function readOne(info) {

    return info.collection.findOne(info.query)
}

function createOne(info) {
    
    return info.collection.inertOne(info.doc)
}

function replaceOne(info) {

    return info.collection.findOneAndReplace(info.query,info.doc)
}

function changeOne(info) {
    
    return info.collection.findOneAndUpdate({$set: info.query},info.doc)
}

function deleteOne(info) {
    
    return info.collection.deleteOne(info.query)
}

module.exports.connect = connect
module.exports.close = close
module.exports.readAll = readAll
module.exports.readOne = readOne
module.exports.createOne = createOne
module.exports.replaceOne = replaceOne
module.exports.changeOne = changeOne
module.exports.deleteOne = deleteOne