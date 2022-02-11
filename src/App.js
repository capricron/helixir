import React from "react";
import { Route,Routes} from "react-router-dom";
import Header from './container/Header'
import Blog from './container/Blog'
import Trunajaya from './container/blog/Trunajaya'

function Index(){
  return(
    <React.Fragment>
      <Header />
      <Blog />
    </React.Fragment>
  )
}

export default function App() {
  return (
    <React.Fragment>
        <Routes>          
          <Route path="/" element={<Index/>}/>
          <Route path="/blog" element={<Trunajaya/>}/>
          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>

    </React.Fragment>
  );
}