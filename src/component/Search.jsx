import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  const onChange = (value) => {
    setText(value);
    getQuery(value);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(event) => onChange(event.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
