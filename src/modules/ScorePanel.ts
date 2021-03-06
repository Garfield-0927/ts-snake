// 定义计分板的类
class ScorePanel{
    score: number = 0;
    level: number = 1;
    ScoreEle: Element;
    LevelEle: Element;
    MAXLEVEL: number;
    LEVELUP: number;

    constructor(MAXLEVEL:number = 10, LEVELUP:number = 10) {
        this.ScoreEle = document.getElementById("score").getElementsByClassName("value")[0];
        this.LevelEle = document.getElementById("level").getElementsByClassName("value")[0];


        this.MAXLEVEL = MAXLEVEL;
        this.LEVELUP = LEVELUP;
    }

    // 加分
    addscore(){
        this.score++;
        this.ScoreEle.innerHTML = this.score.toString();
        if (this.score%this.LEVELUP === 0){
            this.levelup();
        }
    }


    // 升级
    levelup(){
        if (this.level<this.MAXLEVEL){
            this.level++;
            this.LevelEle.innerHTML = this.level.toString();

        }
    }


}

export default ScorePanel;