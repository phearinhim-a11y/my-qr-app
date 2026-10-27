import { useState } from 'react';
import './App.css';

const App = () => {
  // បង្កើត State ដើម្បីគ្រប់គ្រងការបង្ហាញ QR Code (ដំបូងកំណត់ជា false គឺមិនទាន់បង្ហាញ)
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="container">
      {/* ពេលចុចប៊ូតុង វាจะប្តូរតម្លៃ showQR ឱ្យផ្ទុយពីមុន */}
      <button className="btn" onClick={() => setShowQR(!showQR)}>
        {showQR ? 'My QR Code' : 'Click'}
      </button>

      {/* បើកការបង្ហាញ QR Code នៅពេលដែល showQR មានតម្លៃ true */}
      {showQR && (
        <div className="img-box" style={{ marginTop: '20px' }}>
          <img src="/QR.jpg" alt="" />
        </div>
      )}
    </div>
  );
};

export default App;