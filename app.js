// import { sayBye as bye, hello } from "./module1.js"
import * as say from "./module1.js"
import helloJS from "./module2.js"

function sayHi(){
    console.log('Hi Modules')
}
sayHi()

say.sayBye()
say.sayHello()

helloJS()