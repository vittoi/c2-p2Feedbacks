import "./style.css";

import Tags from "@yaireo/tagify/dist/react.tagify"; // Tagify react-wrapper file

const SearchBar = ({ tagifyRef, searchPatterns }) => {
  function handleChange() {
    searchPatterns();
  }

  return (
    <Tags
      tagifyRef={tagifyRef}
      settings={{
        placeholder: "Type related words",
        maxTags: 5,
      }}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
