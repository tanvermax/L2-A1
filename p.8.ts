{

    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(n * n);
                }
            }, 1000); // 1 second delay
        });
    }
    


    squareAsync(4).then(console.log);        
    // Output after 1 second: 16
    
    squareAsync(-3).catch(console.error);    
    // Output: Error: Negative number not allowed
    

}