export default function insertionSort(input: any) {
    for (let i = 0; i < input.length; i++) {
        let k = input[i], index = i
        for (let j = i - 1; j >= 0; j--) {
            if (input[j] > k) {
                let l = input[j]
                input[j] = input[index]
                input[index] = l
                index--
            }
            else break
        }
    }
    console.log(input)
    return input
}
