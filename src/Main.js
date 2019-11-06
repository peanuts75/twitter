import React from 'react';
import TextBox from './TextBox'
import { tsPropertySignature } from '@babel/types';
import TextBox2 from './TextBox2'

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="textBox2">
        <TextBox2 />
        </div>
        <div className="textBox">
        <TextBox />
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
        <div className="textBox">
        <TextBox/>
        </div>
    </div>
  );
}
}
export default Main;