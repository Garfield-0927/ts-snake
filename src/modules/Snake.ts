
class Snake{
    container: HTMLElement;

    head: HTMLElement;
    body: HTMLCollection;

    constructor(){
        this.container = document.getElementById('snake')
        this.head = this.container.querySelector('div');
        this.body = this.container.getElementsByTagName('div');
    }



    // 获取蛇头坐标
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }


    // 设置蛇头坐标
    set X(val:number){
        if (this.X === val)
        {
            return;
        }

        if (val<0||val>290){
            throw new Error("dead!")
        }
        if (this.body[1]&& (this.body[1] as HTMLElement).offsetLeft === val){
            if (val > this.X){
                val-=20;
            }else {
                val+=20;
            }
        }


        this.moveBody();
        this.head.style.left = val + "px";
        this.checkBump();
    }

    set Y(val:number){
        if (this.Y === val)
        {
            return;
        }
        if (val<0||val>290){
            throw new Error("dead!")
        }
        if (this.body[1]&& (this.body[1] as HTMLElement).offsetTop === val){
            if (val > this.Y){
                val-=20;
            }else {
                val+=20;
            }
        }
        this.moveBody();
        this.head.style.top = val + "px";
        this.checkBump();
    }



    // 增加蛇身体长度
    addBody(){
        this.container.insertAdjacentHTML("beforeend", "<div></div>")
    }


    // 移动身体
    moveBody(){
        if (this.body.length > 1){
            for (let i = this.body.length-1; i>0; i--){
                let X = (this.body[i-1] as HTMLElement).offsetTop;
                let Y = (this.body[i-1] as HTMLElement).offsetLeft;
                (this.body[i] as HTMLElement).style.top = X + "px";
                (this.body[i] as HTMLElement).style.left = Y + "px";
            }
        }
    }

    // 检查是否撞到自己
    checkBump(){
        for (let i = 1; i < this.body.length; i++){
            let ele = this.body[i] as HTMLElement;
            if (this.X === ele.offsetLeft && this.Y === ele.offsetTop){
                throw new Error("dead!")
            }
        }


    }






}

export default Snake;