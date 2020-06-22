import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Topbar } from "./components/Topbar/Topbar";
import { AllCategories } from "./components/AllCategories/AllCategories.jsx";
import { SingleCategory } from "./components/SingleCategory/SingleCategory.jsx";
import { Todos } from "./components/Todos/todos";

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      message: "the.dark.side.of.",
      title: "eventify",
      searchValue: "",
    };
  }
  // Local: http://localhost:3000/categories.json
  // Remote: https://api.jsonbin.io/b/5ef0d985e2ce6e3b2c777cc4
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5ef0d985e2ce6e3b2c777cc4")
      .then((response) => response.json())
      .then((categories) => this.setState({ categories: categories }));
  }

  render() {
    const { categories, searchValue } = this.state;
    const filteredCategories = categories.filter(
      (category) =>
        JSON.stringify(category)
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      () => console.log(filteredCategories)
    );
    const searchHandle = (e) => this.setState({ searchValue: e.target.value });

    const routes = [
      {
        path: "/",
        component: AllCategories,
        categories: filteredCategories,
      },
      {
        path: "/categories",
        component: AllCategories,
        categories: filteredCategories,
      },
      {
        path: "/singlecategory/:id",
        component: SingleCategory,
        categories: filteredCategories,
      },
      {
        path: "/todo",
        component: Todos,
        categories: filteredCategories,
      },
    ];

    return (
      <BrowserRouter>
        <div className="app">
          <Topbar
            searchHandle={searchHandle}
            message={this.state.message}
            title={this.state.title}
          />
          <Switch>
            {routes.map(({ path, component: C, categories }) => (
              <Route
                exact
                path={path}
                render={(props) => (
                  <C
                    {...props}
                    categories={categories}
                    search={this.state.searchValue}
                  />
                )}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//               <AllCategories categories={ filteredCategories } searchValue= { searchValue } />
