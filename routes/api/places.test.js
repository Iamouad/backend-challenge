const app = require('../../server') 
const supertest = require('supertest')
const request = supertest(app)

// Sends GET Request to /api/places endpoint
it('Gets the places endpoint', async () => {
    
    const res = await request.get('/api/places')
    expect(res.status).toBe(200);

})

// Sends POST Request to /api/places endpoint
it('Post a new place endpoint', async () => {
    const res = await request.post('/api/places').send({
        city: "test",
        state: "test",
        name:"test"
    })
    expect(res.status).toBe(200);

})

// Sends PUT Request to /api/places endpoint
it('Update a place endpoint', async () => {
    const res = await request.put('/api/places/60f0988837c134161cb8f84b').send({
        city: "Atlanta",
    })
    expect(res.status).toBe(200);
    expect(res.body.city).toBe("Atlanta");
})

// Sends PUT Request to /api/places endpoint
it('Delete a place endpoint', async () => {
    const res = await request.delete('/api/places/60f07b5096650c4c4041e09d')
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("place deleted successfuly");
})
