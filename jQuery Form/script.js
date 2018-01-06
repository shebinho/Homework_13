$(document).ready(function () {
var table = $("#contacts-table");
var saveButton = $("#saveButton");
var form = $("#contacts-form");
var uniqueId = 1;



    $(saveButton).click(function(event){
    event.preventDefault();


        //we now take the values that were entered in the inputs
        var firstName = $("#first_name").val();
        var lastName = $("#last_name").val();
        var email = $("#email").val();

        //then we create a table row in which we will put the values
        var tr = $("<tr>");

        //we are going to need 3 cells for the values and one table cell for the edit row and delete row buttons and also the hidden save row button (display="none")
        var uniqueIdTD = $("<td>");
        var firstNameTD = $("<td>");
        var lastNameTD = $("<td>");
        var emailTD = $("<td>");
        var buttonsTD = $("<td>");
        //we enter the values we took from the inputs in the TDs we just created
        uniqueIdTD.text(uniqueId);
        firstNameTD.text(firstName);
        lastNameTD.text(lastName);
        emailTD.text(email);
        buttonsTD.html(`
        <input type="button" value="edit"  id="editRow${uniqueId}" />
        <input type="button" value="delete" id="deleteRow${uniqueId}" />
        <input type="button" value="save" id="saveRow${uniqueId}" style="display: none" /> 
        `);


        //now we can put the cells (TDs) into the table row
        tr.append(uniqueIdTD);
        tr.append(firstNameTD);
        tr.append(lastNameTD);
        tr.append(emailTD);
        tr.append(buttonsTD)
        //then we can append this table row to the table
        table.append(tr);
        //we now need to add event listeners on the edit, delete and save buttons of the table row
        //first we get the buttons by their id
        var editRowButton = $(`#editRow${uniqueId}`);
        var deleteRowButton = $(`#deleteRow${uniqueId}`);
        var saveRowButton = $(`#saveRow${uniqueId}`);
        //then we add the click event listeners
        $(editRowButton).click(function(){

            //in the edit mode we first make the edit button and delete button not visible using display="none", and the save button visible
            editRowButton.css({"display" : "none"});
            deleteRowButton.css({"display" : "none"});
            saveRowButton.css({"display" : "block"});

            //we change the inner html of the TDs to be inputs now, instead of only text. The inputs will have the the same values for firstname, lastname and email
            firstNameTD.html(`<input type = "text" value = "${firstName}" id = "first-name-${uniqueId}" /> `);
            lastNameTD.html(`<input type = "text" value = "${lastName}" id = "last-name-${uniqueId}" /> `);
            emailTD.html(`<input type = "text" value = "${email}" id = "email-${uniqueId}" /> `);

                //after we save ne need to hide the save button and display the edit and delete buttons again

                $(saveRowButton).click(function(){

                    editRowButton.css({"display" : "inline"});
                    deleteRowButton.css({"display" : "inline"});
                    saveRowButton.css({"display" : "none"});
                    //we now get the editted values from the new inputs and change the TDs innerHTML again to be only text, which  corresponds to the new values
                    //getting the values again by the id of the input

                    firstName = $(`#first-name-${uniqueId}`).val();
                    lastName = $(`#last-name-${uniqueId}`).val();
                    email = $(`#email-${uniqueId}`).val();

                    //inserting the new editted values to the corresponding cells

                    firstNameTD.text(firstName);
                    lastNameTD.text(lastName);
                    emailTD.text(email);
                    

                });
        });




                //to delete the row we just use the method remove on the table row
                $(deleteRowButton).click(function(){
                     tr.remove();
                });


 
                form[0].reset();
                uniqueId++;
  //and at the end we increment the lastUniqueId by 1 for the next table row
    });

});