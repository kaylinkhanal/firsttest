let sname = ["Kaylin", "Tikaram", "Sandeep", "parasar", "Anjal"];
const fullName= {
  'Kaylin' : 'Khanal',
  'Tikaram' : 'Acharya',
  'Sandeep' : 'Nepal',
  'parasar' : 'Baral',
  'Anjal' : 'Thapa', 
}


let values = Object.values(fullName);

const fullNameWithSurname = sname.map((item,index)=>{
    return `${item} ${fullName[item]}`
});

console.log(fullNameWithSurname);


const meroNamm = ()=>{
  const pahilo = "Tikaram";
  const antim = "Acharya";

  return `${pahilo} ${antim}`
}

meroNamm();