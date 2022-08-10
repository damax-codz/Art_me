
import { Link } from 'react-router-dom';
import './style.css'


const singnup =()=>{
    return (
      <div className="signup">
        <form action="http://localhost:4000/admin" method="post">
          <h2>Join our community</h2>
          <input type="text" name="name" placeholder="input your name.." required/>
          <input type="email" name="email" placeholder="input your email.." required />
          <input
            type="password"
            name="password"
            placeholder="input your password.."
            required
          />
          <input
            type="password"
            name="repreat pass"
            placeholder="repeat your password.."
            required
          />
          <Link to='/login' className='lg'>already have an account?</Link>
          <button>submit</button>
        </form>
      </div>
    );
}
export default singnup;