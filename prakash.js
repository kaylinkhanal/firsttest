const x=["prakash", "Hari"]

const fullNames={
    prakash:"neupane",
    hari:"pandey"
}
const firstName= Object.keys(fullNames);
console.log(firstName);

x.map((items)=>{
    return items+firstName[items];
})




