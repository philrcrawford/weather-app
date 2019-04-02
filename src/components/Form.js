import React, { Component } from "react";

const Form = props => (
  <form onSubmit={props.getWeather} className="mb-2">
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <select name="units">
      <option name="celcius">Celcius</option>
      <option name="fahrenheit">Fahrenheit</option>
    </select>
    <button>Get Weather</button>
  </form>
);

export default Form;
