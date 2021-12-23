# State management week-end task

## Background:

- Congratulations, you are the CEO of the successful human resources company <choose your company name>.
- The company has many employees with the same position in different parts of the country and around the world (all workers are **Paramedics**).
- Each employee's day begins with filling out a manual form that includes his or her personal details, workplace, and inventory list at the current workplace.
- Following the growth of the company, there is a need to upgrade to a smarter system that will give every employee the opportunity to fill out the form online and submit it.
- Your task is to build the front side of the form for the employee.

## Requirements:

1. Working with React and a logical division into components

2. Create two states, one for the employee details and one for the list of current equipment in the employee's workplace.

3. An employee information form will include the fields:

- full name,
- work place,
- date.

4. A form for filling out the equipment list will contain the following for each item:

- the name of the item,
- the quantity that should be in the position.
- the current quantity available in the position,
- according to the **current quantity** and the **quantity that should be in the position** also a column that will show how many items are currently missing in the position.
- You will find the list of equipment in the `db` directory.

## Requirements:

- Initialize the **items state** according to the equipment list when by default the current quantity of each product will be equal to 0.
- Allow the employee to update the state of the information about him or the state of the product list using the two forms.
- Create an area where the employee can add a new product that is currently in his position but is not listed in the equipment list in the first place.
- Give the employee the option to remove only the products which he himself has decided to add.
- Please make use of Redux or React hooks

- if you are using react hooks please make sure you use:

1. useState
2. useEffect
3. useContext
4. useReducer

## Assets:

- You will find pictures of sample forms attached in the folder

## Bonus:

- Add an area for the employee where he can sign a digital signature.
