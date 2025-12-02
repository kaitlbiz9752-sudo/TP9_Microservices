import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <CompteForm onAjout={handleRefresh} />
      <CompteList refresh={refresh} />
    </div>
  );
}

export default App;