import './Profile.css';

function Login(){
    
    return <div>
    <div className='navSide'>
        <div className='loginBox'>
            <div><input type="text"></input></div>
            <div><input type="password"></input></div>
            <button>로그인</button>
            <hr/>
            <button>회원가입</button>
        </div>
    </div>
    </div> 
}

export default Login;