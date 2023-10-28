function bitAtPosition (number) {
    let shiftNumber = number >> 1;
    let lsb = shiftNumber & 1;

   console.log(lsb);
}

bitAtPosition(51);