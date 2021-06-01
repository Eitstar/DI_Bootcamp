// Exercise 1: ComponentDidMount
//1-3
// import React from 'react';

// import React from 'react';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }
//     render() {
//         return ( <
//             h1 > My Favorite Color is { this.state.favoriteColor } < /h1>
//         );
//     }
// }
// export default App;


// export default App;


// import React from 'react';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             favoriteColor: ["red"]
//         }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoriteColor: "yellow" })
//         }, 5000)
//     }
//     render() {
//         return ( <
//             h1 > My Favorite Color is { this.state.favoriteColor } < /h1>
//         );
//     }
// }
// export default App;

// Exercise 2: Render


// import React from 'react';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoriteColor: "red" };
//     }
//     favoriteColor = () => {
//         this.setState({ favoriteColor: "blue" });

//     }
//     render() {
//         return ( <
//             div >
//             <
//             h1 > My Favorite Color is { this.state.favoriteColor } < /h1> <
//             button type = "button"
//             onClick = { this.favoriteColor } > Change color < /button> < /
//             div >
//         );
//     }
// }

// export default App;


// Exercise 3: Render


import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "red" };
    }
    shouldComponentUpdate() {
        return true;
    }


    favoriteColor = () => {
        this.setState({ favoriteColor: "pink" });

    }
    render() {
        return ( <
            div >
            <
            h1 > My Favorite Color is { this.state.favoriteColor } < /h1> <
            button type = "button"
            onClick = { this.favoriteColor } > Change color < /button> < /
            div >
        );
    }
}

export default App;