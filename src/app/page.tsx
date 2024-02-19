'use client'
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001/cable');


    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);


      socket.send(JSON.stringify({ type: 'subscribe', channel: 'NextChannel' }));
    });


    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);

    });


    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    return () => {

      socket.close();
    };
  }, []);

  return (
    <div>
      Message:
      {}
    </div>
  );
};

export default Home;
