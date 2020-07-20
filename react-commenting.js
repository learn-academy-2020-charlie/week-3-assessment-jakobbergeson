// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. the state below is an object that stores the value of an empty string with the key word userInput. This will be used throughout this component as well as any child components
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This will take the value from an input and save it in the state key userInput
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. The destructoring down below is allowing any code in the return reffering to userInput in the state to be short handed
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. This calls the method robot above which will gather the inormation entered into the input and then update the state */}
          onChange={ this.robot }
          {/* 5. This is the value of the state object userInput*/}
          value={ userInput }
        />

        <div>
          {/* 6. This JSX tag that connects the child component GoodRobot to the parent compnent App. The placement of this tag in the render() also determines where the info of that component will show on the page.*/}
          <GoodRobot
            {/* 7. This is allowing the inormation in the state object userInput to be passed to the compnent GoodRobot through props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The div below contains the rendered information from this component that will be plugged into the parent component App in it's own respective render. 
      <div>
        <h3>Good Robot</h3>
        {/* 9. This line takes in the information from the state object userInput by the use of props and displays it along with a static sentence */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
export default GoodRobot
