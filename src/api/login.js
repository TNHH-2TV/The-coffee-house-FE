import fetch from ".";

export const Login = async(username, password) => {
    const { data } = await fetch.post("/general/login", { username, password});

    return data;
};
