let userInput : unknown;
let userName :string;


userInput = 6;
userInput = "ssss";

if (typeof(userInput) === "string") userName = userInput;

//nevertype
let generateError = (mess: string, code : number): never => {
    throw {message: mess, errorCode : code}
}

generateError("Error", 500);