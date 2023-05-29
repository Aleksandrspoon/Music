import { useEffect, useState } from 'react';
import * as S from '../Dropdown/Dropdown__style';

function Dropdown({ type, filterList, riseSelectedFilterCount }) {
  const [filterCount, setFilterCount] = useState(0);

  const handleItemClick = () => {
    setFilterCount(filterCount + 1);
  };

  useEffect(() => {
    riseSelectedFilterCount(filterCount);
  }, [filterCount]);

  return (
    <S.Dropdown>
      <S.DropdownWrapper>
        <S.DropdownContent>
          {type !== 'year' ? (
            filterList.map((item, index) => {
              return (
                <S.DpopdownItem key={index} onClick={handleItemClick}>
                  {item}
                </S.DpopdownItem>
              );
            })
          ) : (
            <S.DropdownRadio>
              {filterList.map((item, index) => {
                return (
                  <S.RadioLabel key={index}>
                    <S.RadioInput type="radio" name="radio" />
                    <S.RadioBox></S.RadioBox>
                    <span>{item}</span>
                  </S.RadioLabel>
                );
              })}
            </S.DropdownRadio>
          )}
        </S.DropdownContent>
      </S.DropdownWrapper>
      <S.FilterCount>{filterCount}</S.FilterCount>
    </S.Dropdown>
  );
}

export default Dropdown;
