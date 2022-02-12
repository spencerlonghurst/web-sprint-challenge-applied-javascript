import axios from 'axios';


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  const Card = (article) => {

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgBox = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgBox);
  imgBox.appendChild(authorImg);
  author.appendChild(authorName);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgBox.classList.add('img-container');

  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.addEventListener('click', () => {
    console.log(article.headline);
  })
  return card;
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  

  //I need to loop over each of the articles, then loop over each of the individual articles within.

  const cardAppender = (selector) => {
    axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      //console.log(resp);
      // console.log(resp.data.articles[0])
      const entryPoint = document.querySelector(selector);
      const data = resp.data.articles.javascript;

      // resp.data.articles.forEach(article => {
      // const dogCard = Card({ article });
      // entryPoint.appendChild(dogCard);
      // })


    //   const breeds = Object.keys(resp.data.articles);
    // for (let i = 0; i < breeds.length; i++) {
    //   Card(breeds);
    // }


      // const keys = Object.keys(resp.data.articles);
      // console.log(keys[0]);
      // const values = Object.values(keys);
      // console.log('the values:', values);

      // values.forEach(obj => {
      //   const elem = Card(obj);
      //   entryPoint.appendChild(elem);
      // })
      

      // breeds.forEach(obj => {
      //   const elem = Card(obj);
      //   entryPoint.appendChild(elem);
      // })

      // for (let i = 0; i < data.length; i++) {
      //   const dataReturned = resp.data.articles[i];
      //   console.log('data returned:', dataReturned);

        // dataReturned.forEach(obj => {
        //   const elem = Card(obj);
        //   entryPoint.appendChild(elem);
      // })
    // }
  })
  .catch(err => {
    console.log(err);
  })

}


export { Card, cardAppender }












// const testData = 
//   {"javascript":
//     [
//       {
//       "id":"1e4d8724-5973-4b5b-84d9-a30a3c5adb70",
//       "headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//       "authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
//       "authorName":"SIR RUFF'N'STUFF"
//       },
//       {
//         "id":"553e2401-c95d-4029-89b8-fc6bdb60ae5e","headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
//       "authorPhoto":"https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg",
//       "authorName":"BONES R. LIFE"
//       },
//       {
//         "id":"9c2ed89e-7150-4cd6-a5c2-4a4f3d6932c8",
//         "headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
//         "authorPhoto":"https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
//         "authorName":"PUPPER S. DOGGO"
//       },
//       {
//         "id":"b3af02ec-5733-4a14-8876-5db708d20051","headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
//         "authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
//         "authorName":"SIR RUFF'N'STUFF"
//       }
//     ],
//   "bootstrap":
//     [
//       {
//         "id":"5efa1378-c91f-49eb-9955-02e477c95920","headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"},{"id":"d03affc6-b06e-4b4a-9909-3981c7cb8389","headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"a85f88d3-0845-426d-9f02-930daa5c9b34","headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"}]
