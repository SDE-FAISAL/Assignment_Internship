
// 1. Create a JavaScript restaurantManager class with the following properties:

// here "restaurantList"
class restaurantManger{ 
    restaurantList = [
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    // part1-b “printAllRestaurantNames"
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {return data.restaurantName})
    }

    // part1-c  "filterRestaurantByCity" 
    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {return data.city==cityName})
    }

}

const restaurantobject = new restaurantManger();
const output1 = restaurantobject.printAllRestaurantNames();
// output printAllRestaurantNames
console.log(output1);

// output filterRestaurantByCity
console.log(restaurantobject.filterRestaurantByCity('Mumbai'));



// 2. Please find order details for Punjabi Tadka restaurant in Delhi as: 
orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
   };

  
//    a. Calculate the total number of orders placed for the restaurant.

const total = Object.values(orderData).reduce((prev, next) => prev + next);
console.log(total);

// b. Calculate the number of order proportion options.
const headers =  Object.keys(orderData);
console.log(headers);

// c. Calculate the percentage of each proportion in below format:
let arr = [];
const response = headers.map((iteam, index) => {
    const obj = {
        "id" : index+1,
        "order": iteam,
        "orderpercentage":((orderData[iteam] / total)*100).toFixed(2)
    }
    arr.push(obj);
})
console.log(arr);













