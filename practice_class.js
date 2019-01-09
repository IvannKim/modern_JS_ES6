class Health {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth() {
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health("Ivan");
myHealth.showHealth();