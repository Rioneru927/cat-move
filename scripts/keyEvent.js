import { cat } from "./cat.js";

export const checkKeyDown = () => {
    document.addEventListener("keydown", (e) => {
        if (!cat.element) return;

        switch (e.key.toLowerCase()) {
            case "z":
                cat.sleep();
                break;
            case "x":
                cat.default();
                break;
            case "c":
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
