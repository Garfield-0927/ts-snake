// 定义食物类
class Food{
    // 定义一个属性表示食物对应的DIV
    element: HTMLElement;

    constructor(){
        // 获取element
        this.element = document.getElementById('food');
    }

    // 获取食物坐标
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    // 改变食物坐标
    position_change(){
        let left;
        let top;
        left = Math.round(Math.random()*29)*10
        top = Math.round(Math.random()*29)*10
        this.element.style.top = top + "px";
        this.element.style.left = left + "px"
    }
}

export default Food;