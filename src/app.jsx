import React, { Component } from "react";
import "./app.css";
import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    //this.setState({ habits: habits}) 와 동일. 왜냐? key-value 이름이 같아서
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({ habits }); 내가 한 것
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });

    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     habits: [
//       { id: 1, name: "Reading", count: 0 },
//       { id: 2, name: "Running", count: 0 },
//       { id: 3, name: "Coding", count: 0 },
//     ],
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };

//   render() {
//     return (
//       <>
//         <nav className="navbar">
//           Habit Tracker{" "}
//           <span className="total-count">{this.state.habits.length}</span>
//         </nav>
//         <form onSubmit={this.handleSubmit}>
//           <input className="habit-input" type="text" placeholder="Habit" />
//           <button className="add">Add</button>
//         </form>

//         <Habits />
//         <button className="reset">Reset All</button>
//       </>
//     );
//   }
// }

// export default app;

// function App() {
//   return <Habits />;
// }
