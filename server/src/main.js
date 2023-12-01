import Koa from "koa";
import Router from "@koa/router";
import Send from "koa-send";
import Static from "koa-static";
import HTTP from "http";
import MATE from "emoji-mate";

const PORT = process.env.PORT || 3000;
const APP = new Koa();
const ROUTER = new Router();
const API = new Router({ prefix: "/api" });
const PUBLIC = Static("./public");

API.get("/", (ctx, next) => {
	ctx.response.status = 200;
	ctx.body = { message: MATE };
});

APP.use(ROUTER.routes()).use(ROUTER.allowedMethods());
APP.use(API.routes()).use(API.allowedMethods());
APP.use(PUBLIC);

APP.use(async (ctx, next) => {
	await Send(ctx, "index.html", { root: "public" });
	return next();
});

const SERVER = HTTP.createServer(APP.callback());

SERVER.listen(PORT, () => {
	console.log(`Server Started · PORT: ${PORT}`);
});
