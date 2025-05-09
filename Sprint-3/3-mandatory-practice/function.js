const functions = {
    add: (num1, num2) => num1 + num2,
    createUser: () => {
        const user = {firstName: 'Obie'};
        user['lastName'] = 'Obs';
        return user;
    }
};


module.exports = functions;