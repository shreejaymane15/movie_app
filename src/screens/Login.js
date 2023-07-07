function Login(){

    const SignIn =()=>{
        window.sessionStorage.setItem("isLoggedIn",'true');
    }
    return (<>
            <h1>Welcome To Login</h1>
            <button onClick={SignIn}> Sign In</button> 
            </>)
}

export default Login;