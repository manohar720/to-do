export const Form = ({
  titleValue,
  discriptionValue,
  onChangeTitle,
  onChangeDiscription,
  addList,
}) => {
  return (
    <div className="form d-flex gap">
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label fw-bold">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Type a task title"
          onChange={onChangeTitle}
          value={titleValue}
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label fw-bold">
          Discription
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Type a task discription"
          onChange={onChangeDiscription}
          value={discriptionValue}
        />
      </div>
      <button
        type="button"
        className="addBtn btn btn-primary"
        id="myBtn"
        onClick={addList}
      >
        Add
      </button>
      <p id="error"></p>
    </div>
  );
};
