import fetch from ".";

export const getAllCustomer = async () => {
  try {
    const { data } = await fetch.get("/customer/get-all-customer");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCustomer = async (id) => {
  const { data } = await fetch.delete(`/customer/delete-customer?id=${id}`);
  return data;
};

export const createCustomer = async (name, phone, address, email)  => {
  const { data } = await fetch.post("/customer/create", {
    name,
    phone,
    email,
    address,
    password: phone,
    confirmPassword: phone,
  });
  return data;
};
