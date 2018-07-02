export function addNumber(number){
    return {
        type:"ADD",
        payload: number
    }
};
export function subtractNumber(number){
    return {
        type:"SUBTRACT",
        payload: number
    }
};
export function multiplyNumber(number){
    return {
        type:"MULTIPLY",
        payload: number
    }
};
export function divideNumber(number){
    return {
        type:"DIVIDE",
        payload: number
    }
};
