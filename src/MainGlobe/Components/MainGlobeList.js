import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ListItem from "../../Components/ListItem";

const MainGlobeList = ({
  data,
  selected,
  search,
  onItemHover = () => {},
  onItemClick = () => {},
  handleClearSelection = () => {},
}) => {
  const searchRef = useRef();
  const [itemList, setItemList] = useState(data);
  const [searchTerm, setSearchTerm] = useState(search);
  const [selectedCheck, setSelectedCheck] = useState(false);

  useEffect(() => {
    setItemList(data);
  }, [data]);

  useEffect(() => {
    if (search === "") setSearchTerm(search);

    searchRef.current.focus();
  }, [search]);

  useEffect(() => {
    setFilteredList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, searchTerm, selectedCheck]);

  const setFilteredList = () => {
    let filtered = [...data];

    if (selectedCheck) {
      filtered = filtered.filter((item) => selected.includes(item.iso));
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setItemList(filtered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <StyledListWrapper>
      <StyledInput
        ref={searchRef}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        autoFocus
      />
      <StyledControls>
        <StyledSelected onClick={() => setSelectedCheck(!selectedCheck)}>
          <input
            type="checkbox"
            name="input_select"
            checked={selectedCheck}
            readOnly
          />
          <label htmlFor="input_select">Only selected</label>
        </StyledSelected>
        {selected.length ? (
          <button onClick={handleClearSelection}>Clear</button>
        ) : (
          <></>
        )}
      </StyledControls>
      <ul>
        {itemList.map((item) => (
          <ListItem
            key={item.iso}
            data={item}
            onHover={onItemHover}
            onClick={onItemClick}
            selected={selected.includes(item.iso)}
          />
        ))}
      </ul>
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 8px;
  box-sizing: border-box;
  background: #fff;
  max-height: calc(100vh - 40px);
  width: 250px;
  overflow-y: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 4px;
  border-style: none;
  background: #f5f5f5;
  width: 100%;

  :focus {
    background: #eee;
    outline: none;
  }
`;

const StyledSelected = styled.div`
  margin: 10px 0;

  label:hover,
  input:hover {
    cursor: pointer;
  }
`;

const StyledControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: fit-content;
    background: transparent;
    border: 1px solid #ccc;
  }

  button:hover {
    cursor: pointer;
    border-color: #5b5b5b;
  }
`;

export default MainGlobeList;
