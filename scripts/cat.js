export const cat = {
    name: "Bobby",
    owner: "Prabowo",
    skin: {
        normal: "./assets/wkwk.gif",
        sleep: "./assets/tedok.gif",
        eat: "./assets/makan.gif",
    },
    element: document.createElement('img'),
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    speed: 10,

    show() {
        this.element.classList.add("cat");
        this.default();
        document.getElementById("arena").appendChild(this.element);
    },

    default() {
        this.element.src = this.skin.normal;
    },

    sleep() {
        this.element.src = this.skin.sleep;
    },

    eat() {
        this.element.src = this.skin.eat;
    },

    getName() {
        return this.name;
    },

    getOwner() {
        return this.owner;
    },

    moveRight(x = this.speed) {
        this.x += x;
        this.element.style.left = `${this.x}px`;
    },

    moveLeft(x = this.speed) {
        this.x -= x;
        this.element.style.left = `${this.x}px`;
    },

    moveDown(y = this.speed) {
        this.y += y;
        this.element.style.top = `${this.y}px`;
    },

    moveUp(y = this.speed) {
        this.y -= y;
        this.element.style.top = `${this.y}px`;
    }
};
