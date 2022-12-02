let sname = ["Kaylin", "Tikaram", "Sandeep", "parasar", "Anjal"];
const fullName= {
  'Kaylin' : 'Khanal',
  'Tikaram' : 'Acharya',
  'Sandeep' : 'Nepal',
  'parasar' : 'Baral',
  'Anjal' : 'Thapa', 
}
//Modified by Aayush
// initial array
let keys = Object.keys(fullName);
let values = Object.values(fullName);

sname.map((item,index)=>{
    return `${item} ${fullName[item]}`
});

console.log(withSurname);