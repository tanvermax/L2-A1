{


    {
        


        function formatString(input: string, toUpper?: boolean): string {
            if (input && toUpper === undefined) {
                return input.toUpperCase();
            }
            else if (input && toUpper === true) {
                // Convert to uppercase
                return input.toUpperCase();
            }
            else if ( input && toUpper === false) {
                return input.toLowerCase();

            }
            else {
                return input;
            }
        }





        


    }

    //

}