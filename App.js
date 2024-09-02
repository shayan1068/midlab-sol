import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the selected story and input values
  const [storyTemplate, setStoryTemplate] = useState('template1');
  const [inputs, setInputs] = useState({
    noun1: '',
    noun2: '',
    adjective: '',
    verb: '',
  });
  const [showStory, setShowStory] = useState(false);

  // Story templates
  const stories = {
    template1: `Once upon a time, there was a ${inputs.noun1} who loved to ${inputs.verb}. It was a ${inputs.adjective} day, and the ${inputs.noun2} joined in the fun!`,
    template2: `The ${inputs.adjective} ${inputs.noun1} decided to ${inputs.verb} with a ${inputs.noun2} on a sunny afternoon.`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleStorySelection = (e) => {
    setStoryTemplate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputs).every((input) => input !== '')) {
      setShowStory(true);
    } else {
      alert("Please fill out all the fields before submitting!");
    }
  };

  const handleRestart = () => {
    setInputs({
      noun1: '',
      noun2: '',
      adjective: '',
      verb: '',
    });
    setShowStory(false);
  };

  return (
    <div className="App">
      <h1>MadLibs Game</h1>
      {!showStory ? (
        <div>
          <label>
            Choose a story template:
            <select value={storyTemplate} onChange={handleStorySelection}>
              <option value="template1">Story 1</option>
              <option value="template2">Story 2</option>
            </select>
          </label>
          <form onSubmit={handleSubmit}>
            <label>
              Noun 1:
              <input
                type="text"
                name="noun1"
                value={inputs.noun1}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Noun 2:
              <input
                type="text"
                name="noun2"
                value={inputs.noun2}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Adjective:
              <input
                type="text"
                name="adjective"
                value={inputs.adjective}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Verb:
              <input
                type="text"
                name="verb"
                value={inputs.verb}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Get Story</button>
          </form>
        </div>
      ) : (
        <div>
          <p>{stories[storyTemplate]}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
