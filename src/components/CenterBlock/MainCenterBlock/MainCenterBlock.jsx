import { useState, useEffect } from 'react'
import { getAllTracks } from '../../../API/API'
import FilterItem from '../Filter/FilterItem'
import CenterBlockContent from '../Content/Content'
import SearchBlock from '../Search/Search'

import { trackDataList } from '../../../mocks/track-data';

import * as S from './main_center_block__style'

function Filter({ tracks }) {
  const [isDropdownsOpen, setIsDropdownsOpen] = useState(null)
  const toggleDropDown = (type) => {
    if (type === isDropdownsOpen) {
      setIsDropdownsOpen(null)
      return
    }
    setIsDropdownsOpen(type)
  }
  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterItem
        name={'исполнителю'}
        tracks={tracks}
        type={'author'}
        isDropdownsOpen={isDropdownsOpen === 'author'}
        toggleDropDown={toggleDropDown}
        setIsDropdownsOpen={setIsDropdownsOpen}
      />
      <FilterItem
        name={'году выпуска'}
        tracks={tracks}
        type={'year'}
        isDropdownsOpen={isDropdownsOpen === 'year'}
        toggleDropDown={toggleDropDown}
      />
      <FilterItem
        name={'жанру'}
        tracks={tracks}
        type={'genre'}
        isDropdownsOpen={isDropdownsOpen === 'genre'}
        toggleDropDown={toggleDropDown}
      />
    </S.Filter>
  )
}

function MainCenterBlock() {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    getAllTracks().then((data) => setTracks(data))
  }, [])

  return (
    <S.MainCenterBlock>
      <SearchBlock />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <Filter tracks={tracks} />
      <CenterBlockContent playlist={trackDataList}/>
    </S.MainCenterBlock>
  )
}


export default MainCenterBlock;


