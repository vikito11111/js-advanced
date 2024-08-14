class Device {
    constructor(manufacturer) {
        if (new.target === Device) {
            throw new TypeError('Cannot instantiate an abstact class!');
        }

        this.manufacturer = manufacturer;
    }
}

class Keyboard extends Device {
    constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
    }
}

class Monitor extends Device {
    constructor(manufacturer, width, height) {
        super(manufacturer);
        this.width = width;
        this.height = height;
    }
}

class Battery extends Device {
    constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = expectedLife;
    }
}

class Computer extends Device {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
            throw new TypeError('Cannot instantiate an abstact class!');
        }
        
        super(manufacturer);
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

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        }

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        }

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3;
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    };
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

    const { computerQualityMixin, styleMixin } = createMixins();

    computerQualityMixin(Laptop);
    styleMixin(Laptop);

    computerQualityMixin(Desktop);
    styleMixin(Desktop);

    laptop.isClassy();

} catch (error) {
    console.error(error.message);
}