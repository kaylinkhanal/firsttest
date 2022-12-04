let arr = ['Sandip','Rupesh', 'Saru', 'Kaylin'];
let fullname = {
  Sandip: 'nepali',
  Rupesh: 'Budathoki',
  Saru : 'maurati',
  Kaylin: 'khanal'  
}

// solution : 
arr.map((item,id)=>{
  return item + ' ' + fullname[item];
})