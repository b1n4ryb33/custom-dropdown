import "./sample.css";

function sampleComponent(){

    const sayHello = () => {
        return "Tach!";
    }

    return { sayHello };
}

export { sampleComponent };