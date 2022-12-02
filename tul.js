const name=["Kaylin","Tul","Ram","Hari","Sita"];
const fullname={
  Kaylin:"Khanal",
  Tul:"Khatri",
  Hari:"DC",
  Ram:"Mahara",
  Sita:"Magar"
};
name.map((item)=>{
  return `${item} ${fullname[item]}`;
});

