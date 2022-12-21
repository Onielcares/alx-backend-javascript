export default function divideFunction(numerator, denominator) {
    if (numerator !== 0 && denominator !== 0) {
        return (numerator / denominator);
    } else if (denominator === 0) {
        throw "cannot divide by 0"
    }
}