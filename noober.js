  async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

//   // writes the returned JSON to the console
  console.dir(json)

//   // 🔥 start here: write code to loop through the rides

// let   
// console.log(json[0][0].purpleRequested)
// let rides = json

for(let i=0; i<json.length; i++) {
    let ride = json[i] 
    for (let x=0; x<ride.length; x++) {
      let passengers = ride[x]
      // console.log (passengers) 

  let level0fService
    if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested == true) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }

  document.querySelector('.rides').insertAdjacentHTML('beforeend', `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            <i class="fas fa-car-side"></i>
            <span>${levelOfService}</span>
          </h1> 
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengers.passengerDetails.first} ${passengers.passengerDetails.last}</h2>
                <p class="font-bold text-gray-600">${passengers.passengerDetails.phoneNumber}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengers.numberOfPassengers} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p>${passengers.pickupLocation.address}</p>
                <p>${passengers.pickupLocation.city}, ${passengers.pickupLocation.state} ${passengers.pickupLocation.zip}</p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>${passengers.dropoffLocation.address}</p>
                <p>${passengers.dropoffLocation.city}, ${passengers.dropoffLocation.state} ${passengers.dropoffLocation.zip}</p>
              </div>
            </div>
          </div>
`)

}
  }
    }
  window.addEventListener('DOMContentLoaded', pageLoaded)

