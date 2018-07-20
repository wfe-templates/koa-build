/**
 * Created by busyhe on 2018/7/20 上午12:47.
 * Email: 525118368@qq.com
 */
const app = require('../server');
const supertest = require('supertest');
const request = supertest(app.listen());

describe('main server is should success', () => {

    it('should get home success', done => {
        request.get('/api/home')
            .send()
            .expect(200)
            .expect(res => {
                expect(res.body.status).toBe(0)
            })
            .end(e => e ? done.fail(e) : done())
    });
});
