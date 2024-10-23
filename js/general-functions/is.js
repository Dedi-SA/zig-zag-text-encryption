const is = {
    str: str => {
        return typeof str === 'string';
    },
    number: num => {
        return typeof num === 'number' && !isNaN(num) && isFinite(num);
    }
}