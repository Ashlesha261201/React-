// let divelement = document.getElementById("root");

// let h1 = document.createElement("h1");
// h1.innerText = "Hello h1 via DOM"
// divelement.appendChild(h1);

// Same task using react 

// let divelement = document.getElementById("root");

// let h1 = React.createElement("h1", {id:"sam", class:"vohra"}, "Hello using react");
// // let h1 = React.createElement("h1", null, "Hello using react");

// const rootele = ReactDOM.createRoot(divelement);
// rootele.render(h1);

// -----------------------------------------------------
// let divelement = document.getElementById("root");

// let layout = React.createElement("div", null, [
    
//      React.createElement("div", null, [
//           React.createElement("h1", null, "Hello From H1"),
//          React.createElement("p", null, "Hello From p")
//     ]

//  ),
//   React.createElement("div", null, [
//           React.createElement("h1", null, "Hello From H1.2"),
//          React.createElement("p", null, "Hello From p2")
//     ]
//      )
// ]
    
// );

 


// const rootele = ReactDOM.createRoot(divelement);

// rootele.render(layout);

// -----------------------------------------------------

let divelement = document.getElementById("root");

let layout = <div>
               <div>
                  <h1>Hello from H1 using JSX</h1>
               </div>
             </div>

 


const rootele = ReactDOM.createRoot(divelement);

rootele.render(layout);

