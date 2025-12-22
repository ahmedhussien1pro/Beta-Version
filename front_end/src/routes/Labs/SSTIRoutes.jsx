import { Route } from 'react-router-dom';
import SSTI from '../../Pages/Website/UserHome/Labs/SSTI/SSTI.jsx';
import SSTI_LAB from '../../Pages/Website/UserHome/Labs/SSTI/SSTI_lab.jsx';
import Blog from '../../Pages/Website/UserHome/Labs/SSTI/Practical/Lab_2/Blog.jsx';
import BLOG_ITEM from '../../Pages/Website/UserHome/Labs/SSTI/Practical/Lab_2/Blog_item.jsx';
import SSTI_STORE from '../../Pages/Website/UserHome/Labs/SSTI/Practical/Lab_1/SSTI_store.jsx';
const SSTIRoutes = (
  <>
    <Route path='/SSTI' element={<SSTI />} />
    <Route path='/SSTI/SSTI_lab' element={<SSTI_LAB />} />
    <Route path='ssti/ssti_lab/SSTIlab2/blog' element={<Blog />} />
    <Route
      path='ssti/ssti_lab/SSTIlab2/blog/blog-item'
      element={<BLOG_ITEM />}
    />
    <Route path='ssti/ssti_lab/SSTIlab1/store' element={<SSTI_STORE />} />
  </>
);

export default SSTIRoutes;
