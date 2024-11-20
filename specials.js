const currentDate = new Date();
console.log(currentDate); 
let currentDay = currentDate.getDay(); 
console.log(currentDay); /*counts from 0-6 Sunday is 0, Saturday is 6*/

if(currentDay==0){
    special_name.innerHTML = "Sunday - $9 Deluxe Burger & Fries"

}

if(currentDay==2){
    special_name.innerHTML = "Sunday - $9 Deluxe Burger & Fries"
    special_image.src = "images/sunday.jpg"
    special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side."
    
}

/* one = means we're setting a quality, where == means we're asking a question*/ 