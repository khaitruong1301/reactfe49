import React from 'react';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';


function App() {
  return (
    <div className="App">
        {/* <BaiTapLayout1 /> */}
        {/* <BaiTapLayout2 /> */}
        {/* <DataBinding /> */}
        <HandleEvent />
    </div>
  );
}

export default App;
