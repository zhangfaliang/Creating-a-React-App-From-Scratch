import React, { PureComponent } from 'react';
import './App.css'
// Now, create another file in src called App.js. If you’ve worked with React using create-react-app this part should be extremely familiar. This file is just a React component.

//现在，在src中创建另一个名为App.js的文件。如果您使用create-react-app与React合作，则此部分应该非常熟悉。这个文件只是一个React组件
class App extends PureComponent {//浅比较 控制刷线组件
  render() {
    return (
      <div className='App'>
        <div className="comein">
        </div>
        <div className="redpacket">
        </div>
        <h5>Hello ,World! </h5>
      </div>
    );
  }
}

export default App;