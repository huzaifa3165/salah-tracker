console.log("qwerty")


let d = new Date
let date = d.getDate()
let month = d.getMonth()
let year = d.getFullYear()


var tbody = document.querySelector("tbody")
let generateBtn = document.querySelector("button")
generateBtn.addEventListener("click",()=>{
    tbody.innerHTML +=`
    <tr>
    <td class="date"></td>
    <td class="text"></td>
    <td class="text"></td>
    <td class="text"></td>
    <td class="text"></td>
    <td class="text"></td>
    </tr>`
    console.log('lafgl')
})


// console.log(d)
// console.log(date,month+1,year)
var myDate = `${date}-${month + 1}-${year}`
// console.log(myDate)

let dateElements = document.getElementsByClassName('date')
Array.from(dateElements).forEach(function (e) {
    e.innerText = myDate
})
let theBox = document.getElementsByClassName('text')

Array.from(theBox).forEach(function (element,index) {
    // console.log(element)
    element.addEventListener('click', function (e) {
        var colorObj = []
        

        
        if (element.style.background == '') {

            localStorage.setItem(`color${index}`,'green')
            let color= localStorage.getItem(`color${index}`)
            console.log(color)
            element.style.background = `${color}`
            
        }
        
        else if (element.style.background == 'green') {
            
            localStorage.setItem(`color${index}`,'red')
            let color= localStorage.getItem(`color${index}`)
            element.style.background = `${color}`
            // console.log(color)
            
        }   

        else if (element.style.background == 'red') {
            
            localStorage.setItem(`color${index}`,'green')
            let color= localStorage.getItem(`color${index}`)
            
            element.style.background = `${color}`
            // console.log(color)
        }
        

    })
    let color= localStorage.getItem(`color${index}`)
    element.style.background = `${color}`
    
})









































































// if(element.style.background==''){
//     console.log(inT,"qwertyu")
//     element.style.background="green";
//     console.log(element.style.background)
// }

// else if(element.style.background=='green'){
//     element.style.background='red'
// }

// else if(element.style.background=='red'){
//     element.style.background='green'
// }