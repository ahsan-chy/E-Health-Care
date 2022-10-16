// import { useEffect } from 'react';
import './App.css';
import Routers from './Routes/Routers';

function App() {
  
//   function checkUser(){
//     let isLogin = JSON.parse(localStorage.getItem('isLoggedIn'));
//     if(isLogin) {
//         this.props.setLogin(true);
//     } else {
//         this.props.setLogin(false);
//         }
//     }
// useEffect((
//   checkUser()
// ),[])
  return (
    <div>
        {/* All Website Routers - URLs */}
        <Routers/>
    </div>
  );
}

export default App;
// const mapStateToProps = (state) => {
//   return {
//       isLoggedIn: state.routineReducer.isLoggedIn
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       setLogin: (isLogin) => setLogin(isLogin),
//   }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
