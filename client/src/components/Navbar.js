import React from 'react';
import Appbar from '../../node_modules/muicss/lib/react/appbar';
import '../App.css';

class Navbar extends React.Component {
  render() {
    let s1 = {textAlign: 'left'};
    let s2 = {textAlign: 'right'};
    let s3 = {textAlign: 'center'};

    return (
      <Appbar>
        <table width="100%" className='navbar'>
          <tbody>
            <tr style={s1}>
              <td className="mui--appbar-height" style={s1}>Clicky Game</td>
              <td className="mui--appbar-height" style={s3}>Guess Message (Correct or Wrong)</td>
              <td className="mui--appbar-height" style={s2}>Score | Top Score</td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    );
  }
}

export default Navbar;