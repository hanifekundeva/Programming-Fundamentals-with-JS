function bit (number, position) {
    let shiftNumber = number >> position;
    let lsb = shiftNumber & 1;

    console.log(lsb);
}

bit(
    512,
    0
    );