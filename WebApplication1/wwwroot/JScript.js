var price = [1.00, 2.00, 3.00, 4.50];
function checkout() {



    var index = document
        .getElementById("Beverages")
        .selectedIndex;

    var value = document
        .getElementById("Beverages")
        .options;

    var itemPrice = price[index];

    var name = document
        .getElementById("cusName")
        .value;

    var recieptDisplay = document.getElementById("reciept");

    var alcoholWarningDisplay = document.getElementById("alcoholWarning");

    var dateDisplay = document.getElementById("Day");

    var quantity = document
        .getElementById("Quantity")
        .value;
    var itemSelected = value[index].text
    var total = itemPrice * quantity;

    var age = document
        .getElementById("BirthDay")
        .value;
    var customerAge = moment(age);
    console.log(customerAge);
    var ageRequired = moment().subtract(21, 'years');
    var ageDisplay = ageRequired.calendar();
    console.log(ageDisplay);

    recieptDisplay.innerHTML = "Customer: " + name + "<br />  " + quantity + " " + itemSelected + ": " + itemPrice + "$" + "<br />Total Due: " + total + "$";
    recieptDisplay.style.display = "block";

    if (itemSelected == "Beer" || itemSelected == "Wine") {
        dateDisplay.style.display = "block";
    if (customerAge < ageRequired) {
        alcoholWarningDisplay.style.display = "none";
        recieptDisplay.innerHTML = "Customer: " + name + "<br />  " + quantity + " " +
        itemSelected + ": " + itemPrice + "$" + "<br />Total Due: " + total +"$";
        recieptDisplay.style.display = "block"; }
    else if (customerAge > ageRequired) {
        recieptDisplay.style.display = "none";
        alcoholWarningDisplay.innerHTML = "Must be born before " + "<br /> " + ageDisplay + "<br />" + "To purchase " + itemSelected;
        alcoholWarningDisplay.style.display = "block";
        };
    }
}