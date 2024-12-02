import { add } from "../src/main.ts";
import { assertEquals } from "@std/assert";


Deno.test("the sum of two numbers", ()=>{
	assertEquals(add(2,3), 5);
})