import Loginlogo from '../images/loginlogo.png'
import { Link,useNavigate } from 'react-router-dom'
import Show from '../images/show.png'
import Hide from '../images/hide.png'
import { useState ,useEffect} from 'react'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:8081/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const content = await response.json();
        setJwt(content.token);
        localStorage.setItem('JWT',content.token)
        return jwt
        
      } else {
        //
      }
    } catch (error) {
      // handle network error here
    }
  };

  
    useEffect(()=>{
      const storedJwt=localStorage.getItem('JWT')
      if(storedJwt){
        navigate('/')
      }
    },[])
  
  return (
    <div>
      <div className='flex'>
        <div className='w-1/3 mx-40 my-20'>
          <h1 className='my-3' style={{ color: '#000', fontFamily: 'Poppins', fontSize: '40px', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal', letterSpacing: '0.5px' }}>Sign in</h1>
          <p style={{ color: '#000', fontFamily: 'Poppins', fontSize: '22px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', letterSpacing: '0.5px' }}>Hey,Enter your details to login to your account</p>
          <form onSubmit={handleSubmit}>
            <input id='username' type='email' onChange={handleUsername} className='my-5' placeholder='Enter Username/ Email' style={{ display: 'flex', width: '376px', height: '48px', padding: '16px 30px 16px 24px', alignItems: 'center', gap: '10px', borderRadius: '8px', border: '1px solid #5D5D5D' }} />
            <div className='relative'>
              <div className=' w-52 relative'>
                <input id='password' onChange={handlePassword} className='my-5' type={showPassword ? 'text' : 'password'} placeholder='Password' style={{ display: 'flex', width: '376px', height: '48px', padding: '16px 30px 16px 24px', alignItems: 'center', gap: '10px', borderRadius: '8px', border: '1px solid #5D5D5D' }} />
                <img className=' w-5 absolute top-4' style={{ right: '-69%' }} src={showPassword ? Hide : Show} onClick={handleTogglePassword} alt="Show/Hide Password" />
              </div>
            </div>
            <button type='submit' style={{ display: 'flex', width: '376px', height: '48px', padding: '16px 30px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '8px', background: '#AED6B3' }}>Sign in</button>
            <p className='my-3 mx-10' style={{ color: '#797979', fontFamily: 'Poppins', fontSize: '12px', fontStyle: 'normal', fontWeight: '300', lineHeight: 'normal' }}><Link to='/signup'>Don’t have an account yet? <b>Register now!</b></Link></p>
          </form>
        </div>
        <div>
          <img src={Loginlogo} alt="Login Logo" />
        </div>
      </div>
     
    </div>
  );
};

export default Login;