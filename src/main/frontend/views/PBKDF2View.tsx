import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { useState } from 'react';

export const config: ViewConfig = {
  menu: { order: 1, icon: 'line-awesome/svg/key-solid.svg' },
  title: 'PBKDF2',
};

export default function PBKDF2View() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await fetch('/pbkdf2/hash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    setHashedPassword(data.hashedPassword);
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password</label>
          <input
              type='text'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <label>Hashed Password</label>
          <input
              type='text'
              name='hashedPassword'
              value={hashedPassword}
              readOnly
          />
        </div>
      </form>
  );
}