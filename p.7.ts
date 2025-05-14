{

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }


    getDayType(Day.Monday);   // Output: "Weekday"
    getDayType(Day.Sunday);   // Output: "Weekend"
}