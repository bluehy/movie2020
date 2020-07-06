import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";


function App(){
  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    {/* Route는 두개의 props를 가지게 되는데, 하나는 렌더링할 스크린/ 하나는 무슨 명령을 수행할지.
    여기서는 /about에 접속할 경우, About 컴포넌트를 불러오는 기능을 지정한 것. */}
  </HashRouter>
  // 라우터를 만들고(return), 안에 루트를 집어넣는 것.
}

export default App;