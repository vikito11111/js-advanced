function manageTickets(ticketsArray, sortCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = ticketsArray.map(ticketStr => {
        let [destination, price, status] = ticketStr.split('|');

        return new Ticket(destination, price, status);
    });

    tickets.sort((a, b) => {
        if (sortCriterion === 'destination') {
            return a.destination.localeCompare(b.destination);
        }
        else if (sortCriterion === 'price') {
            return a.price - b.price;
        }
        else if (sortCriterion === 'status') {
            return a.status.localeCompare(b.status);
        }
    });

    return tickets;
}

let input = [
    'Philadelphia|94.20|available', 
    'New York City|95.99|available', 
    'New York City|95.99|sold', 
    'Boston|126.20|departed'
];

let sortBy = 'destination';

console.log(manageTickets(input, sortBy));