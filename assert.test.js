import {
    assertFalse,
    assertExists,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let mentira = false;
let existe = "qualquer coisa";
let igual = "igual";
let url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Detector de mentira", () => {
    assertFalse(mentira); 
})

Deno.test("Ser ou não ser", ()=> {
    assertExists(existe);
})

Deno.test("É igual?", () => {
    assertNotEquals(igual, "diferente", "Erro: igual = 'igual'");
})

Deno.test("Url?", () => {
    assertNotMatch("https://www.youtube.com/", url, "Erro: Url inválida");
})
