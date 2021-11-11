// - CacheTag
// - Budget Tracker
// - MyWorkout
// - Marvel Library
// - Agile Note Taker
// + Work Day Planner
// + Coding Quiz
// + Weather Dashboard

const portfolioProjects = [
      {
            name: "CacheTag",
            description: "A hashtag generating app where users can choose their niche, get and store tags, and then copy them to a clipboard for use in other websites.",
            image: "ct.png",
            technologies: ["Node.js", "Express", "Heroku", "MySQL", "JavaScript", "HTML5", "CSS3",  "Sequelize ORM", "Axios", "Materialize CSS", "Responsive Web Design"],
            github: "https://github.com/lukecp5/cachetag",
            live: "https://cachetag2.herokuapp.com/",
      },
      {
            name: "Budget Tracker",
            description: "A budget tracking progressive web application where users can add, edit, and delete their expenses. Since this is a PWA, users are able to use it on and offline thanks to indexedDB. This PWA can also be installed on the user's mobile device or computer and will act like a native application",
            image: "bt.png",
            technologies: ["Progressive Web App", "Node.js", "Express", "MongoDB Atlas", "IndexedDB", "Mongoose", "Heroku", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
            github: "https://github.com/lukecp5/budget-tracker",
            live: "https://agile-budget-tracker.herokuapp.com/",
      },
      {
            name: "MyWorkout",
            description: "MyWorkout is a fitness tracking application that allows users to create and track daily workouts and see them visualized.",
            image: "mw.png",
            technologies: ["Progressive Web App", "Node.js", "Express", "MongoDB Atlas", "IndexedDB", "Mongoose", "Heroku", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
            github: "https://github.com/lukecp5/myWorkout",
            live: "https://my-workouts-tracked.herokuapp.com/"
      },
      {
            name: "Marvel Library",
            description: "An app that hits the Marvel API for any character the user chooses and grabs an abundance of information about the selected character. The app then hits the IMDb API to get data on the movies and comics featuring the character. The character and movie data is displayed on the home page. When a user visits the character's profile page, this app hits Ebay API to find comics featuring the character that are for sale and lists them out along with their prices and descriptions.",
            image: "ml.png",
            technologies: ["HTML5", "CSS3", "JavaScript", "Materialize CSS", "Responsive Web Design", "Marvel API", "IMDb API", "ebay API"],
            github: "https://github.com/lukecp5/marvel-library",
            live: "https://lukecp5.github.io/marvel-library/"
      },
      {
            name: "Agile Note Taker",
            description: "An app that allows users to create and save notes. Users can also edit and delete their notes. This app is built with React and uses the Context API to share data between components.",
            image: "nt.png",
            technologies: ["React", "Context API", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
            github: "https://github.com/lukecp5/note-taker",
            live: "https://agile-note-taker.herokuapp.com/"
      },
      {
            name: "Coding Quiz",
            description: "This is a quiz developed to help you test your coding skills. It is a timed quiz. For every answer you get incorrect, you lose 5 seconds of time. Your ending score is the amount of time you have remaining at the end of the quiz. The coding quiz gives you the ability to save your highscore, so that you can track your progress as you learn more about development.",
            image: "cq.png",
            technologies: ["HTML5", "JavaScript", "CSS3", "Local Storage", "Responsive Web Design"],
            github: "https://github.com/lukecp5/coding-quiz",
            live: "https://lukecp5.github.io/coding-quiz/"
      }
]

export default portfolioProjects;