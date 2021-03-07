import ScorePanel from "./ScorePanel";
import Food from "./Food";
import Snake from "./Snake";


class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    keypress: string = "ArrowDown";
    isLive :boolean = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }



    // 开始方法
    init(){

        // 监听按下事件
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.snakeMove();
    }


    // 键盘按下处理
    keydownHandler(e:KeyboardEvent){
        this.keypress = e.key;
    }


    // 蛇的移动
    snakeMove(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.keypress){
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;

        }
        this.eatFood(X,Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            alert(e.message);
            this.isLive = false;
        }
        this.isLive && setTimeout(this.snakeMove.bind(this), 200 - (this.scorePanel.level-1)*15)
    }


    // 判断吃到食物
    eatFood(X:number, Y:number){
        if (this.isLive){
            if (X === this.food.X &&
                Y === this.food.Y){
                this.food.position_change();
                this.scorePanel.addscore();
                this.snake.addBody();
            }
        }
    }



}

export default GameControl;