import * as S from './center_block__style'
import watch from '../assets/icon/watch.svg'

function CenterBlock() {
  return (
    <S.ContentTitle>
      <S.ContentTitleCol>Трек</S.ContentTitleCol>
      <S.ContentTitleCol>Исполнитель</S.ContentTitleCol>
      <S.ContentTitleCol>Альбом</S.ContentTitleCol>
      <S.ContentTitleCol>
        <S.PlaylistTitleSVG alt="time">
          <image href={watch} />
        </S.PlaylistTitleSVG>
      </S.ContentTitleCol>
    </S.ContentTitle>
  )
}
export default CenterBlock