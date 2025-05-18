import { cat } from "./cat.js";

export const checkKeyDown = () => {
    document.addEventListener("keydown", (e) => {
        if (!cat.element) return;

        switch (e.key.toLowerCase()) {
            case "z":
                cat.sleep();
                break;
            case "n":
                cat.default();
                break;
            case "x":
                cat.eat();
                break;
            case "d":
                cat.moveRight();
                break;
            case "a":
                cat.moveLeft();
                break;
            case "s":
                cat.moveDown();
                break;
            case "w":
                cat.moveUp();
                break;
        }
    });
};
