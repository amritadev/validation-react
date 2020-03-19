class MyForm extends React.Component{
constructor(){
    super();
    this.state = {
        fnm : "",
        fnmErr : "",
        lnm : "",
        lnmErr : "",
        email : "",
        emailErr : "",
        password  : "",
        passwordErr : ""
    }
}
clearAll = ()=>{
this.setState({
        fnmErr : "",
        lnmErr : "",
        emailErr : "",
        passwordErr : ""
})
}
register = ()=>{
    this.clearAll();
if(this.state.fnm ==""){
this.setState({
    fnmErr : "Please eneter the first name"
})
return false;
}
if(this.state.lnm ==""){
    this.setState({
        lnmErr : "Please eneter the last name"
    })
    return false;
}
if(this.state.email ==""){
    this.setState({
        emailErr : "Please eneter the email "
    })
    return false;
}
if(this.state.password ==""){
    this.setState({
        passwordErr : "Please eneter the password"
    })
    return false;
}
return true;
}
render(){
    return (
        <div>
<p>
    First Name : <input value={this.state.fnm} onChange={(evt)=>this.setState({
        fnm : evt.target.value
    })} /><br/>
    <span style={{"color":"red"}}>
        {this.state.fnmErr}
    </span>
</p>
<p>
    Last Name : <input value={this.state.lnm} onChange={(evt)=>this.setState({
        lnm : evt.target.value
    })} />
    <br/>
    <span style={{"color":"red"}}>
        {this.state.lnmErr}
    </span>
</p>
<p>
    Email : <input value={this.state.email} onChange={(evt)=>this.setState({
        email : evt.target.value
    })}/>
    <br/>
    <span style={{"color":"red"}}>
        {this.state.emailErr}
    </span>
</p>
<p>
    Password : <input value={this.state.password} onChange={(evt)=>this.setState({
        password : evt.target.value
    })} />
    <br/>
    <span style={{"color":"red"}}>
        {this.state.passwordErr}
    </span>
</p>
<p>
    <button onClick={this.register}>Register Now</button>
</p>
        </div>
    )
}
}
export default MyForm;