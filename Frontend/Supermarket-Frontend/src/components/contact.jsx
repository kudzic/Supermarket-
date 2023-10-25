import React from 'react'

const contact = () => {
  return (
    <div>
      <div>
      <div>
        <p>Get in Touch</p>
      </div>
      <div>
        <form>
          <label for='name'>Name</label>
          <input type='text' placeholder='Name' name='name' id='name'/>
          <label for='email'>Email</label>
          <input type='text' placeholder='Email' name='email' id='email'/>
          <label for='name'>Name</label>
          <input type='text' placeholder='Phone number' name='phone'/>
          <select >
          <option value=''>How did you find us?</option>
             <option value='Internet'>Internet</option>
             <option value='Family'>Friend/Family</option>
             <option value='other'>Other</option>
          </select>
        </form>
      </div>
      </div>
    </div>
  )
}

export default contact;
