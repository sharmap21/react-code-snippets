import {useState} from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
function App() {
  const [content,setContent] = useState()
  function handleClick(selctedButton) {
    setContent(selctedButton)
  }
  let tabContent = <p>Please select a button</p>;
  if(content){
    tabContent = <div id="tab-content">
                  <h3>{EXAMPLES[content].title}</h3>
                    <p>{EXAMPLES[content].description}</p>
                    <pre>
                      <code>
                         {EXAMPLES[content].code}
                      </code>
                    </pre>
                  </div>
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        
        <ul>
        {CORE_CONCEPTS.map(concept=>
         ( <CoreConcepts key={concept.title} {...concept}/>)
        )}
       
        </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton isSelected={content === 'components'}
        onSelect={()=>handleClick('components')} >Components</TabButton>
        <TabButton isSelected={content === 'jsx'}
        onSelect={()=>handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={content === 'props'}
        onSelect={()=>handleClick('props')}>Props</TabButton>
        <TabButton isSelected={content === 'state'}
        onSelect={()=>handleClick('state')}>State</TabButton>
        </menu>
        {tabContent}

            
           
       </section>
      </main>
    </div>
  );
}

export default App;
