let input: any
function sort(A: any, lo: Number, hi: Number) {
    if (lo < hi) {
        let p = partition(A, lo, hi)
        sort(A, lo, p - 1)
        sort(A, p + 1, hi)
    }
}

function partition(A: any, lo: any, hi: any): any {
    let pivot: any = A[hi]
    let i: any = lo - 1
    for (let j = lo; j < hi; j++) {
        if (A[j] < pivot) {
            if (i != j) {
                i++
                [A[i], A[j]] = [A[j], A[i]]
            }
        }
    }
    i++
    [A[i], A[hi]] = [A[hi], A[i]]
    return i
}

export default function quickSort(inputs: any) {
    input = inputs
    sort(input, 0, input.length - 1)
    return input
}