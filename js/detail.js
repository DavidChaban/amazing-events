const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')
array = data.events
console.log(location)
console.log(location.search)
console.log(id)
const events = data.events.find(item => item._id == id)
console.log(events)
const div = document.getElementById('detailXd')

div.innerHTML = `<div class="mt-4 mb-1 pt-4 d-flex  " >
   <img src="${events.image}" class="class=" img-fluid cardimage imagenDetails 
      "  style="height:10px widht:80px; " alt="${events.name}">
    <div class="card bg-black cardDetail p-4">
    <div class="d-flex flex-column align-items-center container-fluid">
    <div class="card-body d-flex flex-column justify-content-between">
    <div class="d-flex align-items-center flex-column justify-content-start text-white">
                <p class="card-text m-3 p"></p>
            </div>
               <h5 class="card-title">${events.name}</h5>
              <div class="d-flex justify-content-around">
               <p class="card-text m-3">${events.description}   </p>
               </div>
               <div class="d-flex justify-content-around">
               <p class="card-text m-3">Date: ${events.date}   </p>
                  </div>
                  <div class="d-flex justify-content-around">
               <p class="card-text m-3">Category: ${events.category}   </p>
               </div>
               <div class="d-flex justify-content-around">
               <p class="card-text m-3">Place: ${events.place}   </p>
                  </div>
               <div class="d-flex justify-content-around">
               <p class="card-text m-3">Capacity:${events.capacity}   </p>
               </div>
               <div class="d-flex justify-content-around">
                  <p class="pt-2">Estimate: ${events.estimate} </p>
                 </div>
                 <div class="d-flex justify-content-around">
                  <p class="pt-2">Assistance: ${events.assistance} </p>
                 </div>
               <div class="d-flex justify-content-around">
                  <p class="pt-2">Price: $${events.price} </p>
                 </div>
           </div> 
   </div> 
`

