class Relogio {

    constructor() {
        //let self = this;

        this._segundos = 0;

        setInterval(() => console.log(++this._segundos), 1000);

        /*setInterval(function () {
            console.log(++self._segundos); 
        }, 1000);*/
    }

}