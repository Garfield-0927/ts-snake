import "./style/index.less";
import Food from "./modules/Food"
import ScorePanel from "./modules/ScorePanel";


const food = new Food();
const scorepanel = new ScorePanel();
setInterval(()=>{
    food.position_change();
    scorepanel.addscore();
},100)
console.log(document.getElementById("score").getElementsByClassName("value")[0])


