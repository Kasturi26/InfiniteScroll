import React,{useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
 
function Scroll(props) {
 
 const[data,setData]=useState([])
 const[page,setPage]=useState(1);
 //const[loader,setLoader]=useState(true);
 
 function fetchData(page){
  fetch('https://randomuser.me/api/?page={page}&results=20')
  .then(res=>res.json())
  .then(res=> {
    if(page>1){
      let res_arr=[...data,...res.results];
      setData(res_arr);
    }
    else{
      setData(res.results);
    }
    //setLoader(false);
  })
  .catch(err=> console.log("error"+err));
}
 useEffect(()=>{    
    fetchData(page);
 },[]);
 
 function loadMoreHandler(e){
   console.log(e)
   let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop <50;
   if(bottom){
      let page1= page+1;
      fetchData(page1);
      //setLoader(true);
      setPage(page1);
   }

 }

  return (
   <div onScroll={loadMoreHandler} className="table-wrap">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
   <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Profile Pic</th>
          </tr>
        </thead>
      <tbody>
          {data.map((item)=>{
            return(
                <tr>
                    <td>{item.name['first']}</td>
                    <td>{item.gender}</td>
                    <td><img src={item.picture['thumbnail']}/></td>
                </tr>
            )
          })}
        
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </tbody>
</Table>
</div>
  );
}
 
export default Scroll;