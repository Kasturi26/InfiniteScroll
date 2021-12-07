import React, { useState } from 'react';

function Login({funcLogin}) {
    const[details,setDetails] = useState({name:'',pass:''});

  
  
  const handleLogin = (e) => {
     e.preventDefault();
    // console.log(props);
     if(details.name ==='foo' && details.pass === 'bar'){
       console.log("logged in");
       funcLogin(true);
     }

  }

  return (
    <div>
      <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
        <div>
        Username<br />
        <input type="text" name="name"  onChange={e=>setDetails({...details,name:e.target.value})}/>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" onChange={e=>setDetails({...details,pass:e.target.value})} />
      </div>
      <br/>
      <input type="submit" name="submit" value="LOGIN" /><br />
      </form>
    </div>
  );
}



export default Login;