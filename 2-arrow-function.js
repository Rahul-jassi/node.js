// const square = function(x){
//     return x * x
// }
//  const square = (x) => {
//      return x * x
//  }
// const square = (x) => x * x
//  console.log(square(4))
const event = {
    name:'Birthday party',
    guestlist:['jassi', 'priya', 'amit', 'gasso', 'rani'],
    printGuestList()
    {
        console.log('Guest list for ' +  this.name)
    
    this.guestlist.forEach((guest)=>{
     console.log(guest + ' is attending ' +this.name)
})
}}
event.printGuestList()    