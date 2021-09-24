import { useState } from 'react';
import items from './allData';
import Menu from './Menu';
import Button from './Button';
import './Courses.css'
import { Helmet } from 'react-helmet';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function Courses() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{
 
    if(button === 'All'){
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="Courses">
       <Helmet>
        <meta charSet="utf-8" /> 
        <title>GenieGradz | Courses </title>
        <meta name="description" content="GenieGradz | Courses" />
        <link rel="canonical" href="https://geniegradz.com/courses" />
      </Helmet>
      <div className="container-course">
      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>
      </div>
    </div>
  );
}
 
export default Courses