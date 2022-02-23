import fetch from ".";

export const getAllProduct = async () => {
    const { data } = await fetch.get("/admin/all-product");

    return data;
}

export const addGroup = async(name) => {
    const { data } = await fetch.post("/admin/add-group", { name });
    return data;
}

export const getAllGroup = async () => {
    try {
        const { data } = await fetch.get("/admin/all-group");

        return data;
    } catch (error) {
        console.error(error);
    } 
}

export const deleteGroup = async (id) => {
    const { data } = await fetch.delete(`/admin/delete-group?id=${id}`);
    return data;
}

export const deleteProduct = async (id) => {
    const { data } = await fetch.delete(`/admin/delete-product/${id}`);
    return data;
}