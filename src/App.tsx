import { Routes, Route } from 'react-router';
import { SEO } from '@/components/SEO';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <SEO 
        title="Bamitale Hospital | Best Private Hospital in Sagamu, Ogun State Nigeria"
        description="Bamitale Hospital is the best private hospital in Sagamu, Ogun State. 24/7 emergency care, maternity & antenatal services, laboratory, ultrasound, surgery, pediatric care, pharmacy & specialist consultations."
        canonical="https://bamitalehospital.com/"
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}