const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

//注意require('koa-router') 返回的是函数
const router = require('koa-router')();
// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx,next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//add url-route;
router.get('/hello/:name',async (ctx,next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/',async (ctx,next) => {
     ctx.response.body = '<h1>Index</h1>';
});

//add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');