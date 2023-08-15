const { Kafka } = require("kafkajs")
const config = require('config');
const brokers = config.get('brokers');
const clientId = config.get('clientId');

const consume = async (cities_list) => {
    try {
        const kafka = new Kafka({
            "clientId": clientId,
            "brokers": brokers
        })
       //any consumer that we spin up will belong to the same groupId
        const consumer = kafka.consumer({ "groupId": "consumer-group-1" })
        console.log("Connection...")
        await consumer.connect()
        console.log("Connected")
        //any new consumer will read from beginning
        await consumer.subscribe({
            "topic": "Cities",
            "fromBeginning": true
        })
        
        console.log("subscribed")
        
        await consumer.run({
            "eachMessage": async result => { 
                console.log("Received Msg: ", result.message.value.toString(), "\n on partition: ", result.partition, "\n")
                //cities_list.push(result.message.value.toString())
                //get region
                //Fetch traffic state in that region
                //re-produce a message (on diff topic) with region - traffic state data
                //Get (consume from that new topic the)
            }
            })
        return cities_list
        
    } catch (e) {
        console.error(`Some error ${e}`)
    }
    
}

module.exports = consume