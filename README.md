# CPRG306 Assignments - Shopping List Application

This project is a part of the assignments for the course CPRG306. It's implemented using [Next.js](https://nextjs.org/), a React-based framework, to create a dynamic and interactive shopping list application.

## Features

- **Add Goods**: Users can freely add goods to the shopping list.
- **Sort List**: The items in the list can be sorted based on user preference.
- **Meal Ideas**: By clicking on a specific item, users can fetch meal ideas through an API.
- **Ingredient List**: Each meal idea is accompanied by an ingredient list for user reference.
- **Authentication**: Firebase is utilized for user authentication and login functionality.

## Live Demo

The application is deployed and can be accessed at [cprg306-assignments-flame.vercel.app](https://cprg306-assignments-flame.vercel.app).

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abo-chen/cprg306-assignments.git
    ```

2. Navigate to the project directory:
    ```bash
    cd cprg306-assignments
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Setup Firebase:
    - Create a Firebase project.
    - Configure the Firebase authentication.
    - Update the Firebase configuration in the project settings.

5. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

- Once logged in, users can add items to the shopping list, sort the list, and fetch meal ideas by clicking on a specific item.
- The ingredient list for the selected meal idea will be displayed for user reference.

## License

This project is licensed under the GNU General Public License.

