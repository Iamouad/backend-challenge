const mongoose = require('mongoose');
const {Kafka} = require("kafkajs");
const config = require('config');
const db = config.get('mongoURI');
const brokers = config.get('brokers');
const clientId = config.get('clientId');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
            });
        console.log("MongoDB connecting...");
    } catch (error) {
        console.log(error.message);
        //exit process with failure
        process.exit(1);
    }
};

const createTopic = async () => {
    try {
        const kafka = new Kafka({
            "clientId": clientId,
            "brokers": brokers
        })
        //admin interface to cretae topics
        const admin = kafka.admin()
        console.log("Connection...")
        await admin.connect()
        console.log("Connected")
        const topic = await admin.createTopics({
            "topics": [{
                "topic": "Cities",
                "numPartitions": 2,
                "replicationFactor": 2
            }]
        })
        console.log("Topic created:", topic)
        await admin.disconnect()
    } catch (e) {
        console.error(`Some error ${e}`)
    }
    
}

module.exports = {"connectDB": connectDB, "createTopic": createTopic};