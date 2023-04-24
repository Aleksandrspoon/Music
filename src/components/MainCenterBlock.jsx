import  { useState, useEffect } from 'react'
import CenterBlock from './CenterBlock'
import FilterItem from './FilterItem'

import search from '../assets/icon/search.svg'

import * as S from './main_center_block__style'

function Filter({ tracks }) {
  const [isDropdownsOpen, setIsDropdownsOpen] = useState(null);
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(0);

  const toggleDropDown = (type) => {
    if (type === isDropdownsOpen) {
      setIsDropdownsOpen(null);
      return;
    }
    setIsDropdownsOpen(type);
  };

  const updateSelectedFiltersCount = (count) => {
    setSelectedFiltersCount(count);
  };

  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterItem
        name={'Исполнителю'}
        tracks={tracks}
        type={'author'}
        isDropdownsOpen={isDropdownsOpen === 'author'}
        toggleDropDown={toggleDropDown}
        updateSelectedFiltersCount={updateSelectedFiltersCount}
      />
      <FilterItem
        name={'год выпуска'}
        tracks={tracks}
        type={'year'}
        isDropdownsOpen={isDropdownsOpen === 'year'}
        toggleDropDown={toggleDropDown}
        updateSelectedFiltersCount={updateSelectedFiltersCount}
      />
      <FilterItem
        name={'жанр'}
        tracks={tracks}
        type={'genre'}
        isDropdownsOpen={isDropdownsOpen === 'genre'}
        toggleDropDown={toggleDropDown}
        updateSelectedFiltersCount={updateSelectedFiltersCount}
      />
      <div>Выбрано фильтров: {selectedFiltersCount}</div>
    </S.Filter>
  );
}


function MainCenterBlock() {
  const [tracks] = useState([])
  useEffect(() => {
   
  }, [])

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSVGWrapper>
          <svg>
            <image href={search} />
          </svg>
        </S.SearchSVGWrapper>
        <S.SearchInput type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <Filter tracks={tracks} />
      <S.CenterBlockContent>
        <CenterBlock />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}

export default MainCenterBlock



