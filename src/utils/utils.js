export function randomizeArray(arr)
{
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
    return arr;
}

export function showMessage(message)
{
    alert(message);
}

export default {
    randomizeArray,
    showMessage
}