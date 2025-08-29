/*
==========================
 Beginner Level Projects
==========================
(Use your basics: variables, DOM manipulation, events, conditions, loops)
*/

const beginnerProjects = [
    {
      title: "Number Guessing Game",
      needs: [
        "Math.random() for number generation",
        "if-else for checking guess",
        "prompt() for input",
        "console.log() / DOM updates for output"
      ]
    },
    {
      title: "Simple Calculator",
      needs: [
        "Event listeners on buttons",
        "parseFloat() or Number() for number conversion",
        "switch or if-else for operations",
        "Basic DOM updates (textContent)"
      ]
    },
    {
      title: "Digital Clock",
      needs: [
        "Date() for time",
        "setInterval() for updating every second",
        "DOM manipulation to display time"
      ]
    },
    {
      title: "To-Do List",
      needs: [
        "Arrays for storing tasks",
        "push() and splice() for adding/removing",
        "Event listeners for buttons",
        "localStorage for saving tasks"
      ]
    },
    {
      title: "Color Picker / Background Changer",
      needs: [
        "Event listeners (onclick)",
        "DOM style updates (style.backgroundColor)",
        "Possibly <input type='color'>"
      ]
    }
  ];
  
  /*
  ==========================
   Intermediate Level Projects
  ==========================
  (Work with APIs, more complex arrays, and multiple functions)
  */
  
  const intermediateProjects = [
    {
      title: "Weather App",
      needs: [
        "fetch() for API calls",
        "JSON parsing (.json())",
        "Template literals for display",
        "Conditional display if data not found"
      ]
    },
    {
      title: "Quiz App",
      needs: [
        "Array of question objects",
        "Event listeners for answers",
        "Score counter",
        "DOM updates for next question"
      ]
    },
    {
      title: "Currency Converter",
      needs: [
        "API for exchange rates",
        "Dropdown <select> for currency choice",
        "fetch() and toFixed() for formatting numbers"
      ]
    },
    {
      title: "Movie Search App",
      needs: [
        "OMDB API + fetch()",
        "Search input handling (.value)",
        "Displaying search results dynamically"
      ]
    },
    {
      title: "Countdown Timer",
      needs: [
        "Date() and date math",
        "setInterval() to update countdown",
        "Conditional formatting for 'Time’s up!'"
      ]
    }
  ];
  
  /*
  ==========================
   Advanced Level Projects
  ==========================
  (Full apps using OOP, classes, multiple features, local storage)
  */
  
  const advancedProjects = [
    {
      title: "Expense Tracker",
      needs: [
        "Arrays of objects for transactions",
        "reduce() for total calculations",
        "LocalStorage for saving data",
        "Form validation before adding expense"
      ]
    },
    {
      title: "Chat App (Frontend Only)",
      needs: [
        "Arrays for storing messages",
        "Template literals for rendering",
        "Event listeners for sending messages",
        "Auto-scroll to latest message"
      ]
    },
    {
      title: "E-Commerce Product Page",
      needs: [
        "Array of product objects",
        ".filter() for categories",
        "Cart array + total calculation",
        "Event listeners on 'Add to Cart' buttons"
      ]
    },
    {
      title: "Blog with Markdown Support",
      needs: [
        "Textarea input",
        "Markdown parser library (like marked.js)",
        "LocalStorage for saving posts",
        "DOM updates for preview"
      ]
    },
    {
      title: "Kanban Board (Trello-like)",
      needs: [
        "Arrays of objects for tasks",
        "drag & drop API for moving tasks",
        "DOM re-rendering after each change",
        "LocalStorage to persist tasks"
      ]
    }
  ];
  
  // Example: Log all beginner project titles
  beginnerProjects.forEach(project => console.log(project.title));