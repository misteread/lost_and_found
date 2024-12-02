import { Router, Application } from "@oak/oak";
import { Handlebars } from "@handlebars";

const handlebars = new Handlebars()

const router = new Router();

router.get("/", async (ctx) => {
  const home = await handlebars.renderView("home");

  ctx.response.status = 200;
  ctx.response.headers.set("Content-Type", "text/html")
  return ctx.response.body = home;
})


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


Deno.serve({ hostname: "127.0.0.1" }, app.fetch);
