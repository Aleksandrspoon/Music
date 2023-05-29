import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
import Counter from "../Counter/Counter";
import * as S from "../FilterItem/FilterItem__style";

const filterListByYear = ["Новые", " Старые"];

function FilterItem({ isDropdownsOpen, type, toggleDropDown, tracks, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const createFilterListWithNoDuplicate = (type) => {
    const filterList = tracks.map((item) => item[`${type}`]);
    const filterListWithNoDuplicate = filterList.filter(
      (type, i) => filterList.indexOf(type) === i
    );
    return filterListWithNoDuplicate;
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    toggleDropDown(type);
  };

  const [selectedFilter, setSelectedFilter] = useState(0);

  const riseSelectedFilterCount = (count) => {
    setSelectedFilter(count);
  };
  return (
    <S.FilterItem>
      <S.FilterButton isActive={isDropdownsOpen} onClick={() => toggle()}>
        {name}
      </S.FilterButton>
      {selectedFilter ? <Counter count={selectedFilter} /> : null}
      {isDropdownsOpen ? (
        <Dropdown
          type={type}
          riseSelectedFilterCount={riseSelectedFilterCount}
          filterList={
            type !== "year"
              ? createFilterListWithNoDuplicate(type)
              : filterListByYear
          }
        />
      ) : null}
    </S.FilterItem>
  );
}

export default FilterItem;
