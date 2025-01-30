// Take the start code for the Shopping Cart Project
// Debug through it
// Then complete the shopping cart by adding REMOVE buttons that performs the opposite to the Add Button
// Please remember if you remove - to prevent from going into negative quantities
// Also add a Checkout Button that calculates the total price of items in the Shopping cart and places the total on the page (make a new function for this ).
// You are done!
var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;


function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
};


// Function to remove an item from the cart
function remove_selection(x) {
    // Ensure the quantity does not go below zero
    if (quantities[x] > 0) {
        // Decrement the quantity of the selected item
        quantities[x] -= 1;
        // Update totals for the selected item and recalculate total order amount
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        // Refresh the display table to reflect changes
        display_all();
    }
}



function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='add_selection(" + i + ")'>Add</button></td>";
        // Remove button for removing an item
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";

    // document.write(myTable)
    document.getElementById("demo").innerHTML = myTable;
}

// Function to calculate and display the total order amount during checkout
function checkout() {
    // Display the total order amount inside the "total" element
    document.getElementById("total").innerHTML = "Total Amount Due: R" + totalOrderAmt.toFixed(2);
}

window.onload = function () {
    display_all();
}
