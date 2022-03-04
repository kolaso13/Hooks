import { useCallback, useEffect, useMemo, useState } from "react";
import List from "./components/List";

const initialUsers = [
  { id: 1, name: "Adrian" },
  { id: 2, name: "Adri" },
];
function App() {
  const [users, setUser] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUser([...users, newUser]);
  };

  const handleDelete = useCallback(
    (userId) => {
      setUser(users.filter((user) => user.id !== userId));
    },
    [users]
  );
  const handleSearch = () => {
    setSearch(text);
  };

  const fiteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("filter process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  const printUsers = useCallback(() => {
    console.log("changed users", users);
  }, [users]);
  useEffect(() => {
    printUsers();
  }, [users, printUsers]);
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={fiteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
