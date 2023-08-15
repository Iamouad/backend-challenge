const { Kafka } = require("kafkajs")
const { Partitioners } = require('kafkajs')
const config = require('config');
const brokers = config.get('brokers');
const clientId = config.get('clientId');

const produce = async (msg) => {
    try {
        const kafka = new Kafka({
            "clientId": clientId,
            "brokers": brokers
        })
        //admin interface to cretae topics
        const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
        console.log("Connection...")
        await producer.connect()
        console.log("Connected")
        
        //partition name: A-M => 0, N-Z => 1
        //const partition = msg.toUpperCase()[0] > "M" ? 1 : 0
        
        const result = await producer.send({
            "topic": "Cities",
            "messages": [
                {
                    "value": msg.toString(),
                    "key": msg.state
                    //"partition": Math.floor(Math.random() * 2)
                }
            ]
        })
        console.log("Sent successfully ", JSON.stringify(result))
        await producer.disconnect()
        console.log("Disconnect producer")
        
    } catch (e) {
        console.error(`Some error ${e}`)
    } 
    // finally{
    //     process.exit(0)
    // }
    
}

module.exports = produce