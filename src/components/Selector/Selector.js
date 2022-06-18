import "./Selector.css";

const Selector = ({ quote, categoryList, selectCategory }) => {
  return (
    <div className="SelectCategory">
      <label htmlFor="category">Select category</label>
      <select
        id="category"
        onChange={(e) => {
          selectCategory(e.target.value);
        }}
        value={quote?.category}
        className="selector"
      >
        {categoryList.map((category) => (
          <option key={category.id + "id"} value={category.id}>{category.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
