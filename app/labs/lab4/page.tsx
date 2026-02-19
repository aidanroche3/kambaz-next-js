"use client";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </div>
  );
}
