const API = fetch("https://amazing-events.herokuapp.com/api/events")

const datosApi = async() => {
    try{
        res = await API
        arrayApi = await res.json()
        events = arrayApi.events
        console.log(events)
        a(events)
        b(events)
        z(events)
        console.log(a,b,z)
    }catch(err){
        console.log(err)
    }
}
datosApi()

function a(array){
  let statics1 = document.getElementById("EventsTable")
  pastData =array.filter(e => parseInt(e.date) < 2022)
  console.log(pastData)
  let major = pastData.filter(e => ((e.assistance * 100) / e.capacity) > 96)
  let minor = pastData.filter(e => ((e.assistance * 100) / e.capacity) < 70)
  let high = array.map(e => e.capacity)
  let max = Math.max(...high);
  let highest = array.filter(e => e.capacity == max)
    console.log(highest)

  let row = document.createElement ('tr')
      row.innerHTML = `
      <td>${major[0].name}</td>
      <td>${minor[0].name}</td>
      <td>${highest[0].name}</td>`
  statics1.appendChild(row)

  let row2 = document.createElement ('tr')
      row2.innerHTML = `
      <td>${major[1].name}</td>
      <td>${major[1].name}</td>
      <td></td>`
  statics1.appendChild(row2)

  let row3 = document.createElement ('tr')
      row3.innerHTML = `
      <td>${major[2].name}</td>
      <td>${minor[2].name}</td>
      <td>${minor[1].name}</td>
      `
  statics1.appendChild(row3)

  let row4 = document.createElement ('tr')
      row4.innerHTML = `
      <td>${major[3].name}</td>
      <td></td>
      <td></td>`
  statics1.appendChild(row4)
}

  function b(array){
    let futTable = document.getElementById("tableUpcoming")
    let futData = array.filter(e => parseInt(e.date) >= 2022)
    let prueba = futData.filter(e => e.category == "Music Concert")
    console.log(prueba)
    categories = [...(new Set(futData.map(events => events.category)))]

    categories.forEach(category =>{
        let revenues = 0
        let percentage = 0
        futData.forEach(e =>{
            if(e.category == category){
                revenues = revenues + (e.estimate * e.price)
                percentage = ((e.estimate / e.capacity)*100).toFixed(2)
            }
        })
        let row = document.createElement ('tr')
        row.innerHTML = `
        <td>${category}</td>
        <td>${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(revenues)}</td>
        <td>${percentage}%</td>`
        
        futTable.appendChild(row) 
    })
  }

  function z(array){
  let pasTable = document.getElementById("tablePast")
  pastData =array.filter(e => e.assistance)
  categories = [...(new Set(array.map(events => events.category)))]

  categories.forEach(category =>{
      let revenues = 0
      let percentage = 0
      pastData.forEach(e =>{
          if(e.category == category){
              revenues = revenues + (e.assistance * e.price)
              percentage = ((e.assistance / e.capacity)*100).toFixed(2)
          }
      })
      let row = document.createElement ('tr')
      row.innerHTML = `
      <td>${category}</td>
      <td>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(revenues)}</td>
      <td>${percentage}%</td>`
      
      pasTable.appendChild(row) 
   }    )
 }
