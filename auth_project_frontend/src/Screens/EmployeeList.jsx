import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5; 

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:3000/employee/all", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log({ data });
      setEmployees(data);
      setFilteredEmployees(data);
    };

    fetchEmployees();
  }, []);

  // Handle search functionality (filtering by name, designation, or department)
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.designation.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm)
    );
    setFilteredEmployees(filtered);
  };

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Employee List</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by Name, Designation, or Department"
        value={search}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Employee table */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200">Name</th>
            <th className="px-4 py-2 border border-gray-200">Status</th>
            <th className="px-4 py-2 border border-gray-200">Designation</th>
            <th className="px-4 py-2 border border-gray-200">Department</th>
            <th className="px-4 py-2 border border-gray-200">Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td className="px-4 py-2 border border-gray-200">
                {employee.name}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {employee.status}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {employee.designation}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {employee.department}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {employee.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          {Array.from(
            { length: Math.ceil(filteredEmployees.length / employeesPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                } border-blue-500`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <div>
          Showing {indexOfFirstEmployee + 1} to{" "}
          {Math.min(indexOfLastEmployee, filteredEmployees.length)} of{" "}
          {filteredEmployees.length} employees
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
