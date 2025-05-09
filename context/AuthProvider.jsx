import React,{useState} from 'react'
const AuthProvider = ()=>{

    const[token,setToken]= useState(null)
    const[user , setUSer]=useState(null)

    console.log(token,"this is token")
    console.log(user,"this is user")

    const login = (loginToken,userDetails)=> {
        setToken[loginToken];
        setUSer[userDetails];
    }
    return(
        <AuthCOntext.Provider value={{token,user,login}  }>
            {children}
        </AuthCOntext.Provider>
    )
}
export default AuthProvider