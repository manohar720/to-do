export const ListItems = ({ todoList, deleteItem, editItem }) => {
  return (
    <>
      <div className="table-container table-danger  text-white">
        {
          <table>
            <thead>
              <tr>
                <th width="10%">SL No.</th>
                <th width="20%">Task Name</th>
                <th width="45%">Discription</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.taskName}</td>
                    <td>{item.discription}</td>
                    <td>
                      <i
                        className="delete-icon"
                        class="fa-solid fa-trash mx-2"
                        onClick={() => deleteItem(index)}
                      ></i>

                      <i
                        className="edit"
                        class="fa-solid fa-pen-to-square mx-2"
                        onClick={() => editItem(index)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    </>
  );
};
