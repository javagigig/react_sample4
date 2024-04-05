import './Profile.css';
import './Login.css';

function Login(){
    
    return <div>
    <div className='navSide'>
        <div className='loginBox'>
            <div><input type="text" placeholder='아이디'></input></div>
            <div><input type="password" placeholder='비밀번호'></input></div>
            <div><button className='btnLogin'>로그인</button></div>
            <div className='btn'><a href='#'>비밀번호를 잊으셨나요?</a></div>
            <span>──────　</span><span>또는</span><span>　───────</span> 
            <div><button className='btnNew'>새 계정 만들기</button></div>
        </div>
    </div>
    </div> 
}

export default Login;