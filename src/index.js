import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const lhj = {
//   firstName: '刘',
//   lastName: '泓吉'
// };

// const element = (
//   <h1>
//   hello, {formatName(lhj)}!
//   </h1>
// );

// const title = Response.potentiallyMaliciousInput;

// const element = (
//   <h1>
//     {title}
//   </h1>
// );


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// function Welcome(props) {
// return <h1>Hello, {props.name} {props.class} {props.age}</h1>;
// }
// const element = <Welcome name="Sara" class="计科1901班" age="20岁"/>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// function App() {
//   return(
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// 时钟模型
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// 开关状态切换
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: true
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// )


// 条件渲染————判断登录状态还是未登录状态渲染页面
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   handleLoginClick() {
//     this.setState({
//       isLoggedIn: true
//     })
//   }

//   handleLogoutClick() {
//     this.setState({
//       isLoggedIn: false
//     })
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }

//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );


// 列表渲染的基础组件
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );
//   return(
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// )


// 表单
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       value: event.target.value
//     })
//   }

//   handleSubmit(event) {
//     alert('提交的名字: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字:
//           <input type="text" value={this.state.value}
//           onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// )


// 状态提升————温度计算器
// function BoilingVerdict(props) {
//   let celsius = props.scale === 'f' ? toCelsius(props.celsius) : props.celsius;
//   if(celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//          <input
//           value={temperature}
//           onChange={this.handleChange}
//         />
//         <BoilingVerdict
//           celsius={parseFloat(temperature)}
//           scale={scale}
//         />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {
//       temperature: '',
//       scale: 'c'
//     };
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({
//       scale: 'c',
//       temperature
//     })
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({
//       scale: 'f',
//       temperature
//     })
//   }
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return(
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange}
//         />
//         <TemperatureInput
//          scale="f"
//          temperature={fahrenheit}
//          onTemperatureChange={this.handleFahrenheitChange}
//         />
//       </div>
//     );
//   }
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// )

// 组合与继承
// function FancyBorder(props) {
//   return(
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return(
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

// function SplitPane(props) {
//   return(
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return(
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={
//         <Chat />
//       }
//     />
//   );
// }

// function Contacts() {
//   return (
//     <h1>这是侧边栏</h1>
//   );
// }

// function Chat() {
//   return (
//     <h1>这是交流框</h1>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// 测试
// class App extends React.Component {
//   render() {
//     return(
//       <FancyBorder
//         type="text"
//         how={123}
//         aria-required="true"
//         name="name"
//       />
//     );
//   }
// }

// function FancyBorder(props) {
//   return(
//     <div>
//       <div>
//         {props.type}
//       </div>
//       <div>
//         {props.how}
//       </div>
//       <div>
//         {props.name}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// 设置焦点
// class CustomText extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   render() {
//     return(
//       <input
//         type='text'
//         ref={this.textInput}
//       />
//     );
//   }
// }

// ReactDOM.render(
//   <CustomText />,
//   document.getElementById('root')
// )


// 鼠标事件
// class OuterClickExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOpen: false
//     }
//     this.toggleContainer = React.createRef();

//     this.onClickHandler = this.onClickHandler.bind(this);
//     this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('click', this.onClickOutsideHandler)
//   }

//   componentWillUnmount() {
//     window.addEventListener('click', this.onClickOutsideHandler)
//   }

//   onClickHandler() {
//     this.setState(currentState => ({
//       isOpen: !currentState.isOpen
//     }));
//   }

//   onClickOutsideHandler(event) {
//     if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
//       this.setState({
//         isOpen: false
//       })
//     }
//   }

//   render() {
//     return (
//       <div ref={this.toggleContainer}>
//         <button onClick={this.onClickHandler}>Select an option</button>
//         {this.state.isOpen && (
//           <ul>
//             <li>Option 1</li>
//             <li>Option 2</li>
//             <li>Option 3</li>
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <OuterClickExample />,
//   document.getElementById('root')
// )


// 鼠标和指针事件
// class BlurExample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOpen: false
//     };
//     this.timeOutId = null;

//     this.onClickHandler = this.onClickHandler.bind(this);
//     this.onBlurHandler = this.onBlurHandler.bind(this);
//     this.onFocusHandler = this.onFocusHandler.bind(this);
//   }

//   onClickHandler() {
//     this.setState(currentState => ({
//       isOpen: !currentState.isOpen
//     }));
//   }

//   // 我们在下一个时间点使用 setTimeout 关闭弹窗。
//   // 这是必要的,因为失去焦点事件会在新的焦点事件前被触发
//   // 我们需要通过这个步骤确认这个元素的一个子节点是否得到了焦点。
//   onBlurHandler() {
//     this.timeOutId = setTimeout(() => {
//       this.setState({
//         isOpen: false
//       });
//     });
//   }

//   // 如果一个子节点获得了焦点，不要关闭弹窗。
//     onFocusHandler() {
//       clearTimeout(this.timeOutId);
//     }
//   render() {
//     // React 通过把失去焦点和获得焦点事件传输给父节点来帮助我们
//     return (
//       <div onBur={this.onBlurHandler}
//            onFocus={this.onFocusHandler}>
//         <button onClick={this.onClickHandler}
//                 aria-haspopup='true' // 表示点击的时候会出现菜单或是浮动元素
//                 aria-expanded={this.state.isOpen} // 表示展开状态
//         >
//           Select an option
//         </button>
//         {this.state.isOpen && (
//           <ul>
//             <li>Option 1</li>
//             <li>Option 2</li>
//             <li>Option 3</li>
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <BlurExample />,
//   document.getElementById('root')
// )


// 代码分割
// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

// function MyComponent() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <OtherComponent />
//       </Suspense>
//     </div>
//   );
// }

// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('root')
// )


// 不使用Context的传递
// class App extends React.Component {
//   render() {
//     return <Toolbar theme="dark" />;
//   }
// }

// function Toolbar(props) {
//   // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
//   // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
//   // 因为必须将这个值层层传递所有组件。
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   render() {
//     return <Button theme={this.props.theme} />
//   }
// }

// function Button(props) {
//   return (
//     <div>
//       {props.theme}
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// 使用Context的传递

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
// const ThemeContext = React.createContext('light');
// class App extends React.Component {
//   render() {
//     // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//     // 无论多深，任何组件都能读取这个值。
//     // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Button(props) {
//   return (
//     <div>
//       {props.theme}
//     </div>
//   );
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   render() {
//     return <Button theme={this.context} />;
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


// 在嵌套组件中更新 Context
// import {ThemeContext, themes} from './theme-context';
// import ThemedButton from './themed-button';

// // 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
//     // 而外部的组件使用默认的 theme 值
//     return (
//       <>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <ThemedButton />
//       </>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );