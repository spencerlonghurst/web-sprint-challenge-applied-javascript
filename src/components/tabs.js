import axios from 'axios';


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

  const Tabs = (topics) => {
  
  const allTopics = document.createElement('div');
  const javascript = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');
  const jquery = document.createElement('div');
  const nodejs = document.createElement('div');

  allTopics.appendChild(javascript);
  allTopics.appendChild(bootstrap);
  allTopics.appendChild(technology);
  allTopics.appendChild(jquery);
  allTopics.appendChild(nodejs);

  allTopics.classList.add('topics');
  javascript.classList.add('tab');
  bootstrap.classList.add('tab');
  technology.classList.add('tab');
  jquery.classList.add('tab');
  nodejs.classList.add('tab');

  javascript.textContent = topics[0];
  bootstrap.textContent = topics[1];
  technology.textContent = topics[2];
  jquery.textContent = topics[3];
  nodejs.textContent = topics[4];

  return allTopics;
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    const entryPoint = document.querySelector(selector);
    const createdTabs = Tabs(resp.data.topics)
    entryPoint.appendChild(createdTabs);
    })
  .catch(err => console.err(err));
}

export { Tabs, tabsAppender }
