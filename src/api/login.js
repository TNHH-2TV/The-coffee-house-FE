import fetch from "."; 

export const Login = async(phone, password) => {
    try {
        const { data } = await fetch.post("/general/login", { phone, password });//trong dữ liệu client trả về có data trong object nên lấy { data }
        return data;
    } catch (error) {
        console.error(error)
    }
};
