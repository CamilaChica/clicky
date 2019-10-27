export function randomizeArray(arr)
{
    return arr.sort((a,b)=>Math.floor(Math.random))
}

export function showMessage(message)
{
    alert(message);
}

export default {
    randomizeArray,
    showMessage
}