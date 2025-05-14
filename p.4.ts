{

    class Vehicle {
        make: string;
        year: number;

        constructor(make: string, year: number = 2020) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            return `make : ${this.make} , year ${this.year}`;
        }
    }

    class Car extends Vehicle {
        model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        


        getModel(){
            return `model : ${this.model}`;
        }

    }

    const myCar = new Car("Toyota" , 2020, "Corolla");
    console.log(myCar.getInfo());
     // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel());
     // Output: "Model: Corolla"





}