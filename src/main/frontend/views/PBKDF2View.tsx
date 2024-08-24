import {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import {useState} from 'react';
import {TextArea, TextField} from "@vaadin/react-components";
import {Button} from "@vaadin/react-components/Button.js";
import {Notification} from '@vaadin/react-components/Notification.js';
import "../main.css";

export const config: ViewConfig = {
  menu: {order: 1, icon: 'line-awesome/svg/key-solid.svg'},
  title: 'PBKDF2',
};

export default function PBKDF2View() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Check if the password is null or empty
    if (!password || password.trim() === '') {
       const notification =  Notification.show('Password is required');
      notification.setAttribute('theme', 'error');
      return;
    }

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
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <TextField
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
            />
          </div>
          <div className="mb-4">
            <Button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Hashed Password</label>
            <TextField
                name="hashedPassword"
                value={hashedPassword}
                readonly={true}
                className="w-full"
            />
          </div>
        </form>
      </div>
  );
}