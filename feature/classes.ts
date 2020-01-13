class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    //parent contructor
    super(color);
  }

  private drive(): void {
    console.log('xxxxx');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');

// vehicle.honk();

const car = new Car(3, 'green');

car.startDrivingProcess();

console.log(vehicle.color);
