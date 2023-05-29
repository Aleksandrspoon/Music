import * as S from './player_controls__style'

import iconPrev from '../../img/icon/prev.svg'
import iconPlay from '../../img/icon/play.svg'
import iconNext from '../../img/icon/next.svg'
import iconRepeat from '../../img/icon/repeat.svg'
import iconShuffle from '../../img/icon/shuffle.svg'


function PlayerBtnPrev(params) {
  return (
    <S.PlayerBtnPrev>
      <S.PlayerBtnPrevSvg alt="prev">
        <svg>
          <image href={iconPrev} />
        </svg>
      </S.PlayerBtnPrevSvg>
    </S.PlayerBtnPrev>
  )
}

function PlayerBtnPlay(params) {
  return (
    <S.PlayerBtnPlay>
      <S.PlayerBtnPlaySvg alt="play">
        <svg>
          <image href={iconPlay} />
        </svg>
      </S.PlayerBtnPlaySvg>
    </S.PlayerBtnPlay>
  )
}

function PlayerBtnNext(params) {
  return (
    <S.PlayerBtnNext>
      <S.PlayerBtnNextSvg alt="next">
        <svg>
          <image href={iconNext} />
        </svg>
      </S.PlayerBtnNextSvg>
    </S.PlayerBtnNext>
  )
}

function PlayerBtnRepeat(params) {
  return (
    <S.PlayerBtnRepeat>
      <S.PlayerBtnRepeatSvg alt="repeat">
        <svg>
          <image href={iconRepeat} />
        </svg>
      </S.PlayerBtnRepeatSvg>
    </S.PlayerBtnRepeat>
  )
}

function PlayerBtnShuffle(params) {
  return (
    <S.PlayerBtnShuffle>
      <S.PlayerBtnShuffleSvg>
        <svg>
          <image href={iconShuffle} />
        </svg>
      </S.PlayerBtnShuffleSvg>
    </S.PlayerBtnShuffle>
  )
}

function PlayerControls(props) {
  return (
    <S.PlayerControls>
      <PlayerBtnPrev />
      <PlayerBtnPlay />
      <PlayerBtnNext />
      <PlayerBtnRepeat />
      <PlayerBtnShuffle />
    </S.PlayerControls>
  )
}

export default PlayerControls