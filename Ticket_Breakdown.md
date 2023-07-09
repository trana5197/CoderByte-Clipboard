# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**Ticket 1:** Create a database schema to store custom Agent IDs for Facilities
Description:
Create a new table in the database schema to store custom Agent IDs for Facilities. This will allow Facilities to save their own unique identifiers for each Agent they work with.

Acceptance Criteria:
A new table named "FacilityAgentIDs" is created in the database schema.
The table has the following columns:
FacilityID: Foreign key referencing the Facilities table.
AgentID: Foreign key referencing the Agents table.
CustomID: A string field to store the custom Agent ID provided by the Facility.
The database schema is updated showing the relationship between tables.

Implementation Details:
Write a SQL script to create the "FacilityAgentIDs" table with columns FacilityID, AgentID and CustomID.

Time/Effort Estimate:
Database schema design: 2 hours
SQL script: 1 hour
Testing: 1.5 hours
Total: 4.5 hours

**Ticket 2:** Update the Shift retrieval function to include custom Agent IDs
Description:
Modify the existing function getShiftsByFacility to retrieve Shifts and include the custom Agent IDs assigned by Facilities instead of the internal database IDs.

Acceptance Criteria:
Update the getShiftsByFacility function to fetch the Shifts for the given Facility.
Ensure the existing metadata about the Agent assigned to each Shift is still included in the result.

Implementation Details:
Identify the code responsible for fetching Shifts in the getShiftsByFacility function.
Modify the database query to join the FacilityAgentIDs table and retrieve the custom Agent ID instead of the internal database ID.
Update the result data structure to include the custom Agent ID.

Time/Effort Estimate:
Total: 4 hours

**Ticket 3:** Update the report generation function to use custom Agent IDs
Description:
Enhance the generateReport function to utilize the custom Agent IDs assigned by Facilities instead of the internal database IDs when generating reports.

Acceptance Criteria:
Modify the generateReport function to utilize the custom Agent IDs retrieved from the getShiftsByFacility function.
Update the report generation logic to include the custom Agent ID instead of the internal database ID in the generated PDF.

Implementation Details:
Identify the code responsible for generating reports in the generateReport function.
Replace the usage of internal database IDs with the custom Agent IDs in the report generation logic.
Generate the PDF report using the updated information.

Time/Effort Estimate:
Total: 4 hours

**Ticket 4:** Provide an API endpoint to manage custom Agent IDs
Description:
Implement API endpoints to allow Facilities to manage custom Agent IDs for the Agents they work with. This will provide Facilities the ability to create, update, and delete custom IDs.

Acceptance Criteria:
Implement an API endpoint to create, update and delete a custom Agent ID for a Facility and an Agent.

Implementation Details:
Define and Implement the required API endpoints and their respective URL routes.
Perform validation and error handling for the API.

Time/Effort Estimate:
API endpoint: 3 hours
Testing: 2 hours
Total: 5 hours

**Ticket 5:** Update the report submission process to use custom Agent IDs
Description:
Modify the report submission process to utilize the custom Agent IDs when submitting reports for compliance.

Acceptance Criteria:
Update the report submission logic to use the custom Agent IDs when submitting reports.

Implementation Details:
Identify the code responsible for submitting reports.
Modify the code to use the custom Agent IDs in the report submission process.

Time/Effort Estimate:
Total: 4 hours
