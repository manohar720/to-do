export const ListItems = ({ todoList, deleteItem, editItem }) => {
  return (
    <>
      {/* <div className="table-container table-danger  text-white">
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
                        class="fa-solid fa-trash mx-2"
                        onClick={() => deleteItem(index)}
                      ></i>

                      <i
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
      </div> */}
      <div class="container  ">
        {todoList.map((list, index) => {
          return (
            <div class="list-group m-2">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">
                    {index + 1}. {list.taskName}
                  </h5>
                  <small>
                    {" "}
                    <i
                      class="fa-solid fa-trash mx-2"
                      onClick={() => deleteItem(index)}
                    ></i>
                    <i
                      class="fa-solid fa-pen-to-square mx-2"
                      onClick={() => editItem(index)}
                    ></i>
                  </small>
                </div>
                <p class="mb-1 text-wrap">{list.discription}</p>
                <small></small>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
