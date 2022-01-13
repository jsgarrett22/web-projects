/*
Creates n paragraph element(s) with a given message and adds them to a div "main"
*/
function response(id, message, num) {

    var mainDiv = document.getElementById(id);

    for (var i = 0; i < num; i++) {
        var tag = document.createElement("p");
        var text = document.createTextNode(message + " " + i);
        tag.append(text);
        mainDiv.appendChild(tag);
    }
}

/*
TEST_CODE
Writes the type of a given variable to a document for debugging purposes.
*/
function whatIsType(variable) {
    var linebreak = "<br/>";

    result = (typeof variable == "string" ? "The variable " 
                + variable + " is a 'String'" : "The variable " 
                + variable + " is a 'Number'");

    document.write("Result => ");
    document.write(result);
    document.write(linebreak);
}

response("main", "Joshua", 5);
response("two", "Whitney", 5);
response("three", "Brenna and Maddie", 5);
