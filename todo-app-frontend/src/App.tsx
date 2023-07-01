import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Duty = {
  id: number;
  title: string;
};

const App: React.FC = () => {
  const [duties, setDuties] = useState<Duty[]>([]);
  const [newDutyTitle, setNewDutyTitle] = useState('');

  const backendURL = 'http://localhost:3000';

  useEffect(() => {
    fetchDuties();
  }, []);

  const fetchDuties = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/duties`);
      setDuties(response.data);
    } catch (error) {
      console.error('Error fetching duties:', error);
    }
  };

  const createDuty = async () => {
    try {
      await axios.post(`${backendURL}/api/duties`, { title: newDutyTitle });
      setNewDutyTitle('');
      fetchDuties();
    } catch (error) {
      console.error('Error creating duty:', error);
    }
  };

  const deleteDuty = async (id: number) => {
    try {
      await axios.delete(`${backendURL}/api/duties/${id}`);
      fetchDuties();
    } catch (error) {
      console.error('Error deleting duty:', error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {duties?.map((duty) => (
          <li key={duty.id}>
            {duty.title}
            <button onClick={() => deleteDuty(duty.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newDutyTitle}
        onChange={(e) => setNewDutyTitle(e.target.value)}
      />
      <button onClick={createDuty}>Add Duty</button>
    </div>
  );
};

export default App;
