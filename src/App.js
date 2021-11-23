import "./App.css";

import courbe1 from "./img/courbe_mauve.png";
import bol from "./img/bol_riz.png";
import gratin from "./img/gratin.jpg";
import lit from "./img/lit.png";
import horloge from "./img/horloge.png";
import courbe2 from "./img/courbe2.png";


const user = {
  name: "Michel",
  lastName: "Dupond",
  workout: {
    lastSession: {
      duration: 2,
      sport: "VTT",
      week: 42,
      calories: 400,
    },
  },
  sleep: [
    {
      date: 1636135998015,
      duration: 300,
      bpm: 60,
      percentageDeepSleep: 40,
      percentageLightSleep: 30,
    },
  ],
};
const todayDate = new Date();
const today = todayDate.toLocaleDateString('en-GB');

const Card = (props) => {
  return (
    <div>
      <p className="font-bold text-left pl-2 w-full ">{props.title}</p>
      <div className="bg-white flex flex-col justify-center items-center p-2 m-2 rounded-lg text-xs">
        <p className="text-left pl-4 w-full text-base">{props.subtitle}</p>
        {props.children}
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="flex items-center flex-col w-full bg-red-100">
      <header className="flow-root w-full text-center font-bold text-xl mb-4">
        <div>{user.name}'s Dashboard Overview</div>
        <div className="font-light">{today}</div>
      </header>
      {/* <main className="grid grid-cols-3 gap-4"> */}
      {/* <main className="grid grid-cols-3 "> */}
      <main>
        <div className="inline-flex space-x-6">
          <Card>
            <div className="grid grid-cols-3 p-2">
              <div className="bg-yellow-200 p-2 m-2 rounded-lg text-xs">
                <img src={bol} width="30px" />
              </div>
              
              <h1>food suggestions </h1>
              </div>
              <div className="p-5">
              <img src={gratin} width="100px" />
              </div>
          </Card>
          <Card>
            <div className="flex justify-around p-2">
              <div className="bg-purple-200 p-2 m-2 rounded-lg text-xs">
                <img src={lit} width="30" />
              </div>
              <h1>Sleep quality</h1>
            </div>
            <div>
              76% Average
            </div>
            <div className="bg-purple-200 p-2 m-2 rounded-lg text-xs">
              ↑ From last week
            </div>
            <div>
              <img src={courbe1} width="175px" />
            </div>
          </Card>
          <Card>
            <div className="grid grid-cols-3 p-2">
              <div className="bg-green-300 p-2 m-2 rounded-lg text-xs">
                <img src={horloge} width="35px" />
              </div>
              <h1>Time to bed</h1>
            </div>
            <div>
              11pm Average
            </div>
            <div className="bg-green-300 p-2 m-2 rounded-lg text-xs">
             ↓ From last week 
            </div>
            <div>
              <img src={courbe2} width="150px" />
            </div>
          </Card>
        </div>
        
          
        
        <div>
          <Card title="No pain, no gain">
            <>
              training <br />
              {user.workout.lastSession.sport} <br />
              week {user.workout.lastSession.week} <br />
              {user.workout.lastSession.duration} hours
            </>
          </Card>
          <Card subtitle="Diet and Calories">
            You burnt {user.workout.lastSession.calories} calories this week.
          </Card>
        </div>
        <div>
          <Card title="Eating is bae">
            Calculator of calories //the user enters the composition of his meal
            (for example 200g of veal, 100g of rice, 60g of zuchinis...) //he
            specifies if he uses oil or sugar or whatever... //we have the data
            of the number of calories of every ingredient //with an incredible
            cross product we calculate the calories of his meal
          </Card>
        </div>
        <div>
          <Card title="Lesson of life">
            API citation <br />
            Tu sais, c'est pas la longueur de la vie qui compte, mais sa
            profondeur :`)``
          </Card>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
