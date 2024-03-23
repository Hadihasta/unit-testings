const request = require("supertest")
const app = require("../app")
const {sequelize} = require("../models")
const {queryInterface} = sequelize
const BASE_URL = "/api/todo"


// seeding data ke database test
//  jalankan test
//  hapus data dalam database

// hooks / fitur dari jest


// dijalankan sebelum dimulai sebelum test dimulai
beforeAll (async ()=>{
    try {
        await queryInterface.bulkInsert("Todos",[ 
             {
            id: 1000,
            title: "AAA",
            day: "SENIN",
            place: "DARAT",
            created_at: "2024-03-19 16:08:23.876077",
            updated_at: "2024-03-19 16:08:23.876077"
          },
          {
            id: 1001,
            title: "BBB",
            day: "SELASA",
            place: "LAUT",
            created_at: "2024-03-19 16:08:23.876077",
            updated_at: "2024-03-19 16:08:23.876077"
          }, {
            id: 1002,
            title: "CCC",
            day: "RABU",
            place: "UDARA",
            created_at: "2024-03-19 16:08:23.876077",
            updated_at: "2024-03-19 16:08:23.876077"
          }
        ],{})      


    } catch (error) {
        console.log(error)
    }


})



// setelah test selesai
afterAll(async()=>{
    try {
        await queryInterface.bulkDelete("Todos",null)
    } catch (error) {
        console.log(error)
        
    }
})


// describe("GET list Todo /api/todo/", ()=>{

//     it("GET /api/todo",(done)=>{
// // fitur supertest 
//         request(app)
//             .get(`${BASE_URL}/`)
//             .expect('Content-Type',/json/)
//             .expect(200)
//             .then(response => {
              
//                 done();
//             })
//             .catch(err =>{
//                 done(err)
//             })
    
//     })
// })


// describe for grouping 
describe("GET list Todo /api/todo/detail", ()=>{

    it("GET /api/todo",(done)=>{

        request(app)
            .get(`${BASE_URL}/detail`)
            .expect('Content-Type',/json/)
            .expect(200)
            .then(response => {
                // const {body} = response

                console.log (response)
                
                done();
            })
            .catch(err =>{
                done(err)
            })
    
    })
})


// describe("Post Create list todo /api/todo/", ()=>{

//     it("Post /api/todo",(done)=>{

//         request(app)
//             .get(`${BASE_URL}`)
//             .expect('Content-Type',/json/)
//             .expect(200)
//             .then(response => {
               
                
//                 done();
//             })
//             .catch(err =>{
//                 done(err)
//             })
    
//     })
// })


// describe("Delete Create list todo /api/todo/:id", ()=>{

//     it("Delete /api/todo:id",(done)=>{

//         request(app)
//             .get(`${BASE_URL}/:id`)
//             .expect('Content-Type',/json/)
//             .expect(200)
//             .then(response => {
               
                
//                 done();
//             })
//             .catch(err =>{
//                 done(err)
//             })
    
//     })
// })