import React from 'react';
import AppRouter from './routes/routes';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div>
     <AppRouter />
     <Footer/>
    </div>
  );
}

export default App;