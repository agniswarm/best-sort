export default function selectionSort(input: any) {
    console.log(input)
    for (let i = 0; i < input.length; i++) {
        let max = -1 * Infinity, index = 0
        for (let j = 0; j < input.length - i; j++) {
            if (max < input[j]) {
                max = input[j]
                index = j
            }
        }
        let k = input[input.length - 1 - i]
        input[input.length - 1 - i] = input[index]
        input[index] = k
    }
    console.log(input)
    return input
}
