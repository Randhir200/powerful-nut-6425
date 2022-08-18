import axios from 'axios'
const func=()=>{
console.log("hello")
axios.post("https://libretranslate.de/translate",
{q: "hello",
		source: "auto",
		target: "en",
		format: "text",
		api_key: ""}
)
.then((res)=>console.log(res))
	
}
export default func