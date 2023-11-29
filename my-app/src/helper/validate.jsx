export const validate = (data, type) => {
    const errors = {};

    if(!data.userName) {
        errors.userName = "Enter your username.";
    } else {
        delete errors.userName;
    };

    if(!data.password) {
        errors.password = "Enter your password";
    } else if(data.password.length < 8) {
        errors.password = "Your password includes 8 characters or more."
    } else {
        delete errors.password;
    };
}