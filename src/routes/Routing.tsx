import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from '@pages/App/App';
import BankCard from '@pages/BankCard/BankCard';
import Contact from '@pages/Contact/Contact';
import Home from '@pages/Home/Home';
import { NoPageYet } from '@pages/NoPageYet/NoPageYet';
import Timeline from '@pages/Timeline/Timeline';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/bank-card" element={<BankCard />} />
          <Route path="/no-page" element={<NoPageYet />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
