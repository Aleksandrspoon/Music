import PlayerControls from './PlayerControls'
import TrackPlayContain from './TrackPlayContain'

import * as StyledVol from './player-volume__style'
import * as StyledBar from './bar__style'

import like from '../../img/icon/like.svg'
import dislike from '../../img/icon/dislike.svg'
import volume from '../../img/icon/volume.svg'

function TrackPlayBtnLike(props) {
  return (
    <StyledBar.TrackPlayLikeButton>
      <StyledBar.TrackPlayLikeDisButtonSVGWrapper>
        <svg>
          <image href={like} />
        </svg>
      </StyledBar.TrackPlayLikeDisButtonSVGWrapper>
    </StyledBar.TrackPlayLikeButton>
  )
}

function TrackPlayBtnDislike(props) {
  return (
    <StyledBar.TrackPlayDisButton>
      <StyledBar.TrackPlayLikeDisButtonSVGWrapper>
        <svg>
          <image href={dislike} />
        </svg>
      </StyledBar.TrackPlayLikeDisButtonSVGWrapper>
    </StyledBar.TrackPlayDisButton>
  )
}

function VolumeBlock(props) {
  return (
    <StyledVol.BarVolumeBlock>
      <StyledVol.VolumeContent>
        <StyledVol.VolumeImage>
          <StyledVol.VolumeSVG ariaLabel="volume">
            <image href={volume} />
          </StyledVol.VolumeSVG>
        </StyledVol.VolumeImage>
        <StyledVol.VolumeProgress>
          <StyledVol.VolumeProgressLine type="range" name="range" />
        </StyledVol.VolumeProgress>
      </StyledVol.VolumeContent>
    </StyledVol.BarVolumeBlock>
  )
}

function TrackPlayLikeDis(props) {
  return (
    <StyledBar.TrackPlayLikeDis>
      <TrackPlayBtnLike />
      <TrackPlayBtnDislike />
    </StyledBar.TrackPlayLikeDis>
  )
}

function PlayerTrack(props) {
  return (
    <StyledBar.PlayerTrackPlay>
      <TrackPlayContain />
      <TrackPlayLikeDis />
    </StyledBar.PlayerTrackPlay>
  )
}

function BarContent(props) {
  return (
    <StyledBar.BarContent>
      <StyledBar.BarPlayerProgress></StyledBar.BarPlayerProgress>
      <StyledBar.BarPlayerBlock>
        <StyledBar.BarPlayer>
          <PlayerControls />
          <PlayerTrack />
        </StyledBar.BarPlayer>
        <VolumeBlock />
      </StyledBar.BarPlayerBlock>
    </StyledBar.BarContent>
  )
}

function BarElement(props) {
  return (
    <div>
      <BarContent></BarContent>
    </div>
  )
}

export default BarElement