import SqlInjectionRoutes from './SqlInjectionRoutes';
import XSSRoutes from './XSSRoutes';
import BL_VULN__ROUTES from './BL_VULNRoutes';
import BASH_ROUTES from './BashRoutes';
import API_HACKING_ROUTES from './API_HACKINGRoutes';
import AC_VULN_ROUTES from './AC_VULNRoutes';
import CAREERS_IN_CYBER_ROUTES from './CAREERS_IN_CYBERRoutes';
import CLICK_JACKING_ROUTES from './CLICK_JACKINGRoutes';
import COOKIES_ROUTES from './CookiesRoutes';
import CSRF_ROUTES from './CSRFRoutes';
import DIGITAL_FORENSICS_ROUTES from './DIGITAL_FORENSICSRoutes';
import HASHING_ROUTES from './HashingRoutes';
import JWT_ROUTES from './JwtRoutes';
import LINUX_ROUTES from './LinuxRoutes';
import REGEX_ROUTES from './REGEXRoutes';
import SSTI_ROUTES from './SSTIRoutes';
const LabsRoutes = (
  <>
    {XSSRoutes}
    {SqlInjectionRoutes}
    {AC_VULN_ROUTES}
    {API_HACKING_ROUTES}
    {BASH_ROUTES}
    {BL_VULN__ROUTES}
    {CAREERS_IN_CYBER_ROUTES}
    {CLICK_JACKING_ROUTES}
    {COOKIES_ROUTES}
    {CSRF_ROUTES}
    {DIGITAL_FORENSICS_ROUTES}
    {HASHING_ROUTES}
    {JWT_ROUTES}
    {LINUX_ROUTES}
    {REGEX_ROUTES}
    {SSTI_ROUTES}
  </>
);

export default LabsRoutes;
