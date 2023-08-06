import hello from "./hello.js";
import world from "./world.js";
import css from "./style.css";
import * as THREE from "three";
import _ from "lodash";

document.querySelector("#root").innerHTML = hello + " " + world;
console.log("css", css);

console.log(THREE);
console.log(_.cloneDeep({ a: "a" }));
