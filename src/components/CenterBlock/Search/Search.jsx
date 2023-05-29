import * as S from './search__style'

import search from '../../../img/icon/search.svg'

function SearchBlock() {
    return (
      <S.CenterBlockSearch>
        <S.SearchSVGWrapper>
          <svg>
            <image href={search} />
          </svg>
        </S.SearchSVGWrapper>
        <S.SearchInput type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
    )
  }

export default SearchBlock;