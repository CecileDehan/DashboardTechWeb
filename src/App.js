import "./App.css";

import img from "./img/jauge_sleep.png";

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

const Card = (props) => {
  return (
    <div>
      <p className="font-bold text-left pl-2 w-full ">{props.title}</p>
      <div className="bg-blue-200 flex flex-col justify-center items-center p-2 m-2 rounded-3xl text-xs">
        <p className="text-left pl-4 w-full text-base">{props.subtitle}</p>
        {props.children}
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="flex items-center flex-col w-full">
      <header className="flex justify-between w-full text-center font-bold text-xl mb-4">
        <div>Let's the healthy life begin</div>
        <div className="font-light">Hello {user.name}</div>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <div>
          <Card title="Sleep quality and time to bed">
            <img src={img} />
          </Card>
          <Card>graphique sur la semaine</Card>
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
