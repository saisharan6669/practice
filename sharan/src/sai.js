function Loginpage(){
    const message=()=>{
        alert("welcome to zomato")
    }

    return(
        <div>
        
        <h2>zomato loginpage</h2>

        Name:<input type="text"/> <br/><br/>
        Email-id:<input type="text"/> <br/><br/>
        phone no:<input type="number"/> <br/><br/>
        password:<input type="text"/> <br/><br/>

        <button onClick={message}>Login</button>
        
        
        
        
        </div>
    )
}
export default Loginpage