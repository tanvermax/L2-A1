{

    function concatenateArrays<T>(...array: T[][]): T[]{
        return array.flat();
    }
       

    console.log(concatenateArrays([1, 2], [3, 4], [5, 6])); // Output: [1, 2, 3, 4, 5, 6]
    console.log(concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"])); // Output: ["a", "b", "c", "d", "e", "f"]

}