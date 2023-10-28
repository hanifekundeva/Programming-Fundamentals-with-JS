function requiredReading (numberOfPages, pagesPerHour, numberOfDays) {

    let totalReadTime = numberOfPages / pagesPerHour;
    let neededHours = totalReadTime / numberOfDays;

    console.log(neededHours);

}

requiredReading(
    212,
    20 ,
    2 
    );