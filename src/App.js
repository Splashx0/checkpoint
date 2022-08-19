import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto'
import Address from './components/profile/Address'
import FullName from './components/profile/FullName'


function App() {
  return (
    <>
    <div className='App' >
      <ProfilePhoto/>
        <FullName/>
        <Address/>
    </div>
    </>
  );
}

export default App;
