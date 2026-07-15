useEffect(() => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    const defaultUsers = [
      {
        id: crypto.randomUUID(),
        name: "Manager",
        email: "manager@mediaverse.com",
        password: "123456",
        role: "manager",
        status: "active",
      },
      {
        id: crypto.randomUUID(),
        name: "Staff",
        email: "staff@mediaverse.com",
        password: "123456",
        role: "staff",
        status: "active",
      },
    ];

    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
}, []);