//1st_Problem
function kilometerToMeter(kilometer) {
    if (typeof (kilometer) !== 'number' && typeof (kilometer) == 'string') {
        console.error('Error! Please enter a Number.')
        return null;
    }
    var meter = kilometer * 1000;
    return (meter);
}

//2nd_Problem
function budgetCalculator(Watch, Phone, Laptop) {
    var Watch = Watch * 50;
    var Phone = Phone * 100;
    var Laptop = Laptop * 500;
    var sum = (Watch + Phone + Laptop);
    return sum;
}

//3rd_Problem
function hotelCost(days) {
    //for first 10 days cost for staying in hotel is 100 for each day
    if (days <= 10) {
        totalCost = 100 * days;

    }
    //for next 10 days until 20th day price will decrese 20 for every day
    else if (days <= 20) {

        var firstPart = 1000;
        var remainingDays = days - 10;
        var secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;

    } 
    //if the person stays more than 20 days in hotel than after 20th day cos t for each day will be 50 for each day.
    else {
        var firstPart = 100 * 10;
        var secondPart = 10 * 80;
        var finalDays = days - 20;
        var finalPart = finalDays * 50;
        totalCost = firstPart + secondPart + finalPart;

    }

    return totalCost;
}

//4th_Problem
//set a variable with empty string
var longestWord = "";
var allFriends = ["Ashik", "Topu", "Milon", "Sourav", "Hayat", "Sagor", "Mohon", "Rumman", "Rony"]
function megaFriend(arr) {

    //display error if the array contains number instead of string.
    if (typeof (arr) == 'number') {
        console.error('Error!')
        return null;
    }
    //with i++ check whether a string in the array longer than previously found longest string
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }

    }
    return longestWord;
}