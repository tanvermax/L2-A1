{

    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * 2;
        }
    }
    
    console.log(processValue("hellgdfgfdo")); // Output: 5
    console.log(processValue(1056565));      // Output: 20
    
             // Output: 20
        

    

}