function Loginpage(){

    const message=()=>{
        alert("welcome to zomato")
    }

    return(
        <>
        <h2>Zomato loginpage</h2>

        Name :<input type="text"/> <br/><br/>
        Email-id :<input type="text"/> <br/><br/>
        Phone no. :<input type="number"/> <br/><br/>
        Password :<input type="text"/> <br/><br/>

        <button onClick={message}>Login</button>
        
        </>



    )
}

export default Loginpage