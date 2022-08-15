import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h4>
          <FaUser/> Signup
        </h4>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              name="username" 
              value={username} 
              placeholder="username"
              onChange = {onChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id="email" name="email" 
              value={email} 
              placeholder="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password" name="password" 
              value={password} 
              placeholder="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password2" 
              name="password2" 
              value={password2} 
              placeholder="confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Signup</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
