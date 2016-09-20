import {render,findDOMNode} from 'react-dom';
import Item from './components/Item';

render(<Item url="http://www.baidu.com" title="百度"/>, document.getElementById("main"));
