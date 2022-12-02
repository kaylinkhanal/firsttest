let arr = ['Sandip','Rupesh', 'Saru', 'Kaylin'];
let fullname = {
  Sandip: 'nepali',
  Rupesh: 'Budathoki',
  Saru : 'maurati',
  Kaylin: 'khanal'  
}
//Modified by Aayush

// solution : 
arr.map((item,id)=>{
  return item + ' ' + fullname[item];
})