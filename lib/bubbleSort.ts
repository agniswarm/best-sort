
export default function bubbleSort(input: any) {
    console.log(input)
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - 1 - i; j++) {
            if (input[j] > input[j + 1])
                [input[j + 1], input[j]] = [input[j], input[j + 1]]
        }
    }
    // console.log(input)
    return input
}
