
// ()=>{}  = function(){}
const [values, setValues] = useState({pic_path:"", title:""});

const onchange = function(e){
  const {name, values} = e.target;
  setValues({...values})
}



const onchange = (e) => {
  const {name, value} = e.target;
    setValues({...values, [name]:value})
    // const {name, value} = e.target;
    // setValues({...values, [name]:value})
  }
  

  useEffect(() => 
  [{values}]
  );

  const picture = (e) => {
    e.preventDefault();
    
    let img = {
      user_num: window.localStorage.getItem("user_num"),
      pic_path: values.pic_path,
      title: values
      // user_num: window.localStorage.getItem("user_num"),
      // pic_path: values.pic_path,
      // title: values.title
    }
    
    AlbumService.upload(img)
    try{
      console.log(window.localStorage.getItem("user_num"))
      console.log(values.pic_path);
      console.log(values.title);
      alert('업로드 되었습니다.');
      history.push("/Album");
    }
    catch{
      console.log("에러")
    }
  }