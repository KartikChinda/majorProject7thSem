import userDetails from "../Models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const allUsers = await userDetails.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

const sortNumber = (a) => Number([...("" + a)].sort().reverse().join(""));

var finalRes = 0;

const runEncryption = (password) => {
    const pass = parseInt(password);
    const numPass = sortNumber(pass);
    const stringPass = numPass.toString();

    var diff = 0;
    // calculate the difference
    for (let i = 0; i < stringPass.length; i++) {
        diff -= parseInt(stringPass[i])
    }

    if (diff < 0) {
        diff = diff * -1;
    }

    // calculate the sum of squares of the evenly placed numbers
    var num1 = parseInt(stringPass[0])
    var num2 = parseInt(stringPass[2])
    var sumSquares = (num1 ** 2) + (num2 ** 2)

    // Divide the difference with this sum
    var dividedRes = sumSquares / diff;

    // multiply this result with 11 and floor it down
    finalRes = Math.floor((11 * dividedRes))
    console.log(finalRes);

}

export const createUser = async (req, res) => {
    const user = req.body;
    // console.log(req.body);
    const newUser = new userDetails(user);
    // console.log(user);
    const password = user.password;
    console.log(password);

    runEncryption(password);
    newUser.voicePass = finalRes;
    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
