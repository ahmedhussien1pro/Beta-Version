import { Route } from 'react-router-dom';
import DIGITAL_FORENSICS from '../../Pages/Website/UserHome/Labs/Digital_Forensics/Digital_Forensics.jsx';
import DIGITAL_FORENSICS_LABS from '../../Pages/Website/UserHome/Labs/Digital_Forensics/Digital_Forensics_Labs.jsx';
import DIGITAL_FORENSICS_FIRST_LAB from '../../Pages/Website/UserHome/Labs/Digital_Forensics/practical/first_lab/First_Lab.jsx';
import DIGITAL_FORENSICS_MCQ_PAGE from '../../Pages/Website/UserHome/Labs/Digital_Forensics/DigitalForensicsMCQPage.jsx';
const DIGITAL_FORENSICSRoutes = (
  <>
    <Route path='/Digital_Forensics' element={<DIGITAL_FORENSICS />} />
    <Route
      path='/Digital_Forensics/Digital_Forensics_labs'
      element={<DIGITAL_FORENSICS_LABS />}
    />
    <Route
      path='/Digital_Forensics/Digital_Forensics_labs/lab1'
      element={<DIGITAL_FORENSICS_FIRST_LAB />}
    />

    <Route
      path='/Digital_Forensics/MCQ/:category'
      element={<DIGITAL_FORENSICS_MCQ_PAGE />}
    />
  </>
);

export default DIGITAL_FORENSICSRoutes;
