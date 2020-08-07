import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './Components/01.component_type_demo/ClassBasedComponent';
import FunctionBasedComponent from './Components/01.component_type_demo/FunctionBasedComponent';
import PropsDemo from './Components/02.props_demo/PropsDemo';
import FunctionalPropDemo from './Components/02.props_demo/FunctionalPropDemo';
import StateDemo from './Components/03.state_demo/StateDemo';
import StateFormDemo from './Components/03.state_demo/StateFormDemo';
import DestructuringDemo from './Components/04.destructuring_state_demo/DestructuringDemo';
import ParentComponentDemo from './Components/05.parent_and_child_comp_demo/ParentComponentDemo';
import ConditionalRenderDemo from './Components/06.conditional_render_demo/ConditionalRenderDemo';
import EventBindDemo from './Components/07.event_bind_demo/EventBindDemo';
import ListRenderDemo from './Components/08.list_render_demo/ListRenderDemo';
import InputRefDemo from './Components/09.input_ref_demo/InputRefDemo';
import ComponentLifeCycleDemo from './Components/10.component_lifecycle_demo/ComponentLifeCycleDemo';
import PortalDemo from './Components/11.portal_demo/PortalDemo';
import { UserConsumer, UserProvider } from './Components/12.context_demo/UserContextDemo';
import ComponentA from './Components/12.context_demo/ComponentA';
import FragmentDemo from './Components/13.fragment_demo/FragmentDemo';
import AnotherFragmentDemo from './Components/13.fragment_demo/AnotherFragmentDemo';
import Incrementer from './Components/14.higher_order_component_demo/Incrementer';
import axios_get_req_demo from './Components/15.http_req_demo/AxiosGetReqDemo';
import AxiosGetReqDemo from './Components/15.http_req_demo/AxiosGetReqDemo';

function App() {

  let userIsLoggedIn = true;

  const addOne = (randomNumber) => {
    return randomNumber + 1;
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt=""/>
      <ClassBasedComponent />
      <FunctionBasedComponent />
      <br/><hr/><br/>
      <PropsDemo name="Suyash"/>
      <FunctionalPropDemo addOne={addOne}/>
      <br/><hr/><br/>
      <StateDemo />
      <StateFormDemo />
      <br/><hr/><br/>
      <DestructuringDemo />
      <br/><hr/><br/>
      <ParentComponentDemo />
      <br/><hr/><br/>
      <ConditionalRenderDemo isLoggedIn={userIsLoggedIn} />
      <br/><hr/><br/>
      <EventBindDemo />
      <br/><hr/><br/>
      <ListRenderDemo />
      <br/><hr/><br/>
      <InputRefDemo />
      <br/><hr/><br/>
      <ComponentLifeCycleDemo />
      <br/><hr/><br/>
      <PortalDemo />
      <UserProvider value="Suyash">
        <ComponentA />
      </UserProvider>
      <hr/><br/>
      <FragmentDemo /><br/>
      <AnotherFragmentDemo />
      <br/><hr/><br/>
      <Incrementer />
      <br/>
      <AxiosGetReqDemo />
    </div>
  );
}

export default App;