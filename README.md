# Parking Track Application

Our objective is to create an automation website application that allows our client to run the onsite car park more efficiently and to resolve the data protection issue.

How we will resolve the data protetion issue is app will allow users (the client) to securley login, track for an employee (a vehicle owner) and view their basic personal details and vehicle details.

## Project Goals

To allow employees (vehicle owners) to securely login, create an account, add their basic personal details and vehicle details (including their permit number). To allow employees to edit/ update their details they can do seceurely. To allow the user (who is also the client) to securely login, create an account, add their basic personal details. To allow the user to login and track an employee using either a permit number, a registration number or a name (first and last name). This track (or search) will output that employee card(s). ###Security In terms of security on the UI layer (frontend), we will use JavaScript to validate all inputfields within forms. This will prevent any SQL injections. For security on the database (persistence tier), we aim to set up the user permissions to give different users certain capabilities. Also, in the actual database, we will separate content into different tables which will also allow our app run more efficiently.

####Scope

MVP (Minimum viable product) For the first iteration we aim to create MVP which will be to create the functionality that allows the user to track using a permit number, a registration number, a name, and this will output a card/cards. This will prove that the three tiers (frontend, backend, persistence) can work together to give us the required output.

Agile (Scrum): We aim to have weekly iterations where incrememtal builds are delivered to the client. Our Scum Master was Hannah and now Vanessa.

Timeline: The original deadline was Friday 1st November 2019. However, for various reasons including the change in team members and booked PTO's, this deadline has changed and we will come up with new timeline during our next stand up on Friday 8th November 2019.

Budget: The budget is our time.

Website Design: The site map design, the wireframe design and prototypes are on the old Trello board as Rob advised us not to have them on the new Trello board.

#### How The App Works
API calls will go from the frontend (the UI layer) to the backend (the server-side).
Then the backend will send SQL requests to the persistence (database) tier.
The SQL (from the database) will return data/ values (from the tables) to the backend.
The backend will serve up JSON to the frontend.
Now the web user has their required output.
=======
####Tools & Resources: Pluralsight, Google, stack overflow etc.
