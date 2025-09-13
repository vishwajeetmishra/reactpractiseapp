import React, { useState } from 'react'
import { UncontrolledComponent } from '..';

type Props = {}

const ControlledComponent = (_props: Props) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = () => {
    console.log("Email value: " + email);
    console.log("Password value: " + password);
  }
  return (
    <React.Fragment>
      <h2>Controlled Component User Login Form</h2>
      <p>
        A React controlled component is a form element (like input, textarea, or select) 
        whose value is controlled by the component's state. 
        The component's state acts as the "single source of truth." 
        Any changes to the input are handled by an onChange event handler, 
        which updates the state. This ensures the UI is always in sync with the state.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        {email}
        <br/>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        {password}
        <br/>
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <br/>
      <UncontrolledComponent />
    </React.Fragment>

  )
}

export default ControlledComponent