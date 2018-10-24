import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

// For use with WithClass.js
// const withClass = (props) => (
//     <div className={props.className}>
//         {props.children}
//     </div>
// );

export default withClass;