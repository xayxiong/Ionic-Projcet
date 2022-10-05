import express from 'express';
import axios from 'axios';
import cors from 'cors';

// const app =  express();
export class MyApplication {

     clientId11='';
     accessToken11='';
     lockAlias1='';
     groupId1='';
    constructor(app:express.Application) {
        app.use(express.json({ limit: '50mb' }));
        app.use(express.urlencoded({ extended: true, limit: '50mb' }))
        app.use(cors())

        app.use(express.static('public'));

        // query
        app.get('/', (req, res) => {

            const a = Number(req.query['a']);
            const b = Number(req.query['b']);

            res.send((a + b) + '');

        });
        // params
        app.get('/:a/:b', (req, res) => {

            const a = Number(req.params['a']);
            const b = Number(req.params['b']);

            res.send((a + b) + '');

        });

        // POST
        app.post('/body', (req, res) => {
            console.log('request', req.body);
            const { a, b } = req.body;
            res.send((a + b) + '');

        });

        //axios
        app.get('/google', (req, res) => {
            console.log('googling');

            axios.post('https://api.plos.org/search?q=title:DNA',).then(r => {
                res.jsonp(r.data);
            }).catch(e => {
                console.log(e);
                res.send(e);
            })

        })

       app.post('/login',(req,res)=>{
        this.clientId11='';
        this.accessToken11='';
        this.groupId1 = '';
        this.lockAlias1 = '';
       })
        app.post('/test-API', (req, res) => {
            let {pn,ps } = req.body;
            if(!pn||pn<5) pn=5;
            
            !ps||ps<5 ? ps=5 : '';


            const url = 'https://euapi.sciener.com/v3/key/list';
            let body = new URLSearchParams()
            body.set('clientId', this.clientId11)
            body.set('accessToken', this.accessToken11)
            body.set('lockAlias', this.lockAlias1)
            body.set('groupId', this.groupId1)

            body.set('pageNo', pn)
            body.set('pageSize', ps)
            body.set('date', new Date().getTime()+'')

            // body.set('date8', this.date8)

            body.set('date', new Date().getTime() + '');
            // axios.post(url, body, { headers: { 'Content-types': 'application/x-www-form-urlencoded' } }).then(r => {
            //     res.send(r.data);
            // }).catch(e => {
            //     console.log(e);
            //     res.send(e)

            // })

            res.send({status:'ok'})
        })
    }
}

const app = express();
new MyApplication(app);

app.listen(3000,'0.0.0.0',()=>{
    console.log('SERVER started port 3000');
})





