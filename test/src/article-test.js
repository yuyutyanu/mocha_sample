const chai = require("chai")
const expect = chai.expect
const axios = require("axios")

var http = axios.create({
    baseURL: 'http://0.0.0.0:3333/article',
});

describe("ブログテスト", ()=> {
    it("記事の取得", done => {
         http.get('/').then(({status})=>{
            expect(200).to.equal(status)
            done()
        })
    })

    it('記事の登録', done => {
        const payload = {
            title: '台風の日',
            content: '台風の夜だった...'
        }
        http.post('/', payload).then(({status})=>{
            expect(200).to.equal(status)
            done()
        })
    })
});
