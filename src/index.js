import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar(){
  return(
<img
src="https://www.gravatar.com/avatar/nothing"
className="avatar"
alt="avatar"
/>

  );
}
function Message(){
  return(
    <div className="message">
    This is a message for you
    </div>
  );
}

function NameWithHandle(){
  return(
    <span className="name-with-handle">
    <span className="handle">@yourhandle</span>
     <span className="name">Your Name</span>

    </span>
  );
}
const Time= ()=><span className="time">3h ago</span>
const ReplyButton=()=><i className="fa fa-reply reply-button"/>;
const RetweetButton=()=><i className="fa fa-retweet retweet-button"/>;
const LikeButton=()=><i className="fa fa-heart like-button"/>;
const MoreOptionsButton=()=><i className="fa fa-ellipsis-h more-options-button"/>;

const Person = props => <span>Hello, {props.name}</span>;

const Person = ({ name, className }) => <span className={className}>Hello, {name}</span>;

const Person = props => {
  const { className, name } = props;
  return <span className={className}>Hello, {name}</span>;
};

function handleAction(event) {
  console.log('Child did: ', event);
}

function Parent() {
  return <Child onAction={handleAction} />;
}

function Child({ onAction }) {
  return <button onClick={onAction} />;
}

function Tweet(){
  return(
<div className="tweet"><Avatar/>
<div className="content">
 <NameWithHandle/><Time/>
 <Message/>
<div className="buttons">
 <ReplyButton />
 <RetweetButton />
 <LikeButton />
 <MoreOptionsButton />
</div>
</div>
</div>)

}


ReactDOM.render(<Tweet />, document.getElementById('root'));



// 10:08 PM: How do we decide what to turn into a component:
// Consider reusability:
// Consider what changes? If it changes, its likely a good candidate for a component. If it does not change (static) then it probably is not.
//
// TWEET COMPONENT
//
// -Tweet
//  - ReplyButton
//  - RetweetButton
//  - LikeButton
//  - MoreOptions
//
//  // Regular function
//  function LikeButton() {
//    return (
//      <i className="fa fa-heart like-button" />
//    );
//  }
//
//  // I can rewrite as an anonymous function
//  const LikeButton = function() {
//    return (
//      <i className="fa fa-heart like-button" />
//    );
//  }
//
//  // ...that can be turned into and arrow function
//  const LikeButton = () => {
//    return (
//      <i className="fa fa-heart like-button" />
//    );
//  }
//
//  // You can further simplify to this
//  const LikeButton = () => (
//      <i className="fa fa-heart like-button" />
//  );
//
//  const LikeButton = () => <i className="fa fa-heart like-button" />;
//
// PROPS
// HTML Elements -> attributes
// React Components -> props (properties)
//
// React components can be written as function (Stateless Functional Components)
//
// We can pass arguments to functions.
// Props are the arguments to your components.
//
// Props flow from the parent to the child.
// NEVER, child to parent.
//
// Receiving Props
//
// // function Person(props) {
// // return <div className={props.className}>{props.name}</div>;
// // }
//
// // const Person = props => <span>Hello, {props.name}</span>;
//
// // const Person = ({ name, className }) => <span className={className}>Hello, {name}</span>;
//
// // const Person = props => {
// //   const { className, name } = props;
// //   return <span className={className}>Hello, {name}</span>;
// // };
//
// Props flow from the parent to the child ALWAYS
// The child passes data or communicates with the parent via functions passed down as props from the parent.
//
// Props flow down, functions flow up...
//
// One way data binding.
//
// function handleAction(event) {
//   console.log('Child did: ', event);
// }
//
// function Parent() {
//   return <Child onAction={handleAction} />;
// }
//
// function Child({ onAction }) {
//   return <button onClick={onAction} />;
// }
