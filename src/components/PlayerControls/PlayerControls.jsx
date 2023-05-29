import * as S from '../PlayerControls/player_controls__style'

import iconPrev from '../assets/icon/prev.svg'
import iconPlay from '../assets/icon/play.svg'
import iconNext from '../assets/icon/next.svg'
import iconRepeat from '../assets/icon/repeat.svg'
import iconShuffle from '../assets/icon/shuffle.svg'


function PlayerBtnPrev() {
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

function PlayerBtnPlay() {
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

function PlayerBtnNext() {
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

function PlayerBtnRepeat() {
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

function PlayerBtnShuffle() {
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

function PlayerControls() {
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
