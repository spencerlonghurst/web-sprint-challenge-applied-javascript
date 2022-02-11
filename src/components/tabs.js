import axios from 'axios';

const Tabs = (topics) => {
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
  
  const allTopics = document.createElement('div');
  const javascript = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');

  allTopics.appendChild(javascript);
  allTopics.appendChild(bootstrap);
  allTopics.appendChild(technology);

  allTopics.classList.add('topics');
  javascript.classList.add('tab');
  bootstrap.classList.add('tab');
  technology.classList.add('tab');

  javascript.textContent = topics[0];
  bootstrap.textContent = topics[1];
  technology.textContent = topics[2];

  return allTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    //console.log(resp.data.topics);
    const entryPoint = document.querySelector('.tabs-container');
    const someTopics = resp.data.topics;
    for (let i = 0; i < someTopics.length; i++) {
      //console.log(someTopics[i]);
      //entryPoint.appendChild(someTopics);
    }
  })
  .catch(err => console.error(err));
}

export { Tabs, tabsAppender }
