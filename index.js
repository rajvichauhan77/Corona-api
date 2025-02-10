let covid = document.getElementById("covid")

let b_url = `https://api.rootnet.in/covid19-in/stats/latest`


getcases(b_url)

function getcases(b_url){
    fetch(b_url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.regional)
        Showcases(data.data.regional)
    })
}


function Showcases(d){

    covid.innerHTML = ""
    d.map((ele) => {
        covid.innerHTML += `
              <thead>
                <tr>
                    <td class=" col-4  p-2 border">Location</td>
                    <td class="   p-2 border">Dethe</td>
                    <td class="  p-2 border">Discharged</td>
                    <td class="  p-2 border">totalConfirmed</td>
                </tr>
            </thead>
         <tbody>
               <tr class="border  ">
                <td class=" col-4  p-2 border">
                    <b> ${ele.loc}</b>
                </td>
                <td class=" p-2 border">
                    <p>${ele.deaths}</p>
                </td>
                <td class=" p-2 border">
                    <p> ${ele.discharged}</p>
                </td>
                <td class=" p-2">
                    <p>${ele.totalConfirmed}</p>
                </td>
            </tr>
        </tbody>
        `
    })
 
} 

