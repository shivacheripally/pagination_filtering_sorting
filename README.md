# pagination_filtering_sorting

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/stackblitz-starters-ofh8mr)

git repository Link: https://github.com/shivacheripally/pagination_filtering_sorting

hosted Link: https://celebrated-sfogliatella-2b3476.netlify.app/

Pagination and Filtering Component
This project demonstrates a simple pagination and filtering functionality using React. It allows users to browse through a list of users fetched from an API, apply sorting, and filter the users by name.

Components
The project consists of the following components:

App: The main component that renders the Pagination component.
Pagination: Manages the pagination functionality, allowing users to navigate through the pages of users.
Table: Renders the table to display the list of users.
Filtering: Handles the filtering functionality, allowing users to search for specific users by name.
Usage
To use this project, follow these steps:

Clone the repository: git clone https://github.com/shivacheripally/pagination_filtering_sorting
Navigate to the project directory: cd pagination-and-filtering
Install the dependencies: npm install
Start the development server: npm start
Open your browser and visit http://localhost:3000 to see the app in action.
API
The project fetches user data from the JSONPlaceholder API. The API provides a collection of dummy data for testing purposes. The user data is fetched using the fetch function in the useEffect hook within the Pagination component.

Dependencies
This project relies on the following dependencies:

React: A JavaScript library for building user interfaces.
React Router: A routing library for React applications.
The project was bootstrapped using Create React App, which includes all the necessary build tools and configuration.

Explanation
Here's an overview of the key functionality implemented in each component:

App: This component serves as the entry point of the application. It renders the Pagination component, which handles the pagination, sorting, and filtering functionality.

Pagination: This component manages the pagination functionality. It receives the list of users as a prop and calculates the number of pages based on the number of users. It also handles the page selection by calling the pageHandler function provided by the parent component.

Table: This component renders the table to display the list of users. It receives the users prop, which represents the users to be displayed, and maps over the array to render each user's data in a table row.

Filtering: This component handles the filtering functionality. It receives several props from the parent component, including setUsers, setPerPage, and handleReset. It contains an input field for the user to enter a search term and a submit button to initiate the filtering process. When the form is submitted, the component fetches the user data from the API and filters it based on the entered search term. The filtered data is then passed to the parent component via the provided props.

Make sure to check the source code of each component for more detailed explanations of their functionality.

Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.