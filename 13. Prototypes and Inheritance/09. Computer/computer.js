class Device {
    constructor(manufactrer) {
        if (new.target === Device) {
            throw new TypeError('Cannot instantiate an abstact class!');
        }

        this.manufactrer = manufactrer;
    }
}

class Keyboard extends Device {
    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Monitor extends Device {
    constructor(manufactrer, width, height) {
        super(manufactrer);
        this.width = width;
        this.height = height;
    }
}

class Battery extends Device {
    constructor(manufactrer, expectedLife) {
        super(manufactrer);
        this.expectedLife = expectedLife;
    }
}

class Computer extends Device {
    constructor(manufactrer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new TypeError('Cannot instantiate an abstact class!');
        }
        
        super(manufactrer);
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}

class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this._battery = null;
        this.battery = battery;
    }

    get battery() {
        return this._battery;
    }

    set battery(battery) {
        if (!(battery instanceof Battery)) {
            throw new TypeError("battery must be an instance of Battery.");
        }

        this._battery = battery;
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this._keyboard = null;
        this._monitor = null;
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    get keyboard() {
        return this._keyboard;
    }

    set keyboard(keyboard) {
        if (!(keyboard instanceof Keyboard)) {
            throw new TypeError("keyboard must be an instance of Keyboard.");
        }

        this._keyboard = keyboard;
    }

    get monitor() {
        return this.monitor;
    }

    set monitor(monitor) {
        if (!(monitor instanceof Monitor)) {
            throw new TypeError("monitor must be an instance of Monitor.");
        }

        this._monitor = monitor;
    }
}

try {
    const battery = new Battery("Battery Manufacturer", 5);

    const laptop = new Laptop(
        "Laptop Manufacturer",
        2.5,
        8,
        1,
        2.3,
        "Silver",
        battery
    );

    console.log(laptop);

    const keyboard = new Keyboard("Keyboard Manufacturer", 1);
    const monitor = new Monitor("Monitor Manufacturer", 27, 15);

    const desktop = new Desktop(
        "Desktop Manufacturer",
        3.4,
        16,
        2,
        keyboard,
        monitor
    );

    console.log(desktop);

} catch (error) {
    console.error(error.message);
}