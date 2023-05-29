import styled from 'styled-components'

export const BarContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const TrackPlayLike = styled.div`
  padding: 5px;
`

export const TrackPlayLikeButton = styled.div`
  padding: 5px;
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
  :active {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  :hover {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const TrackPlayLikeDisButtonSVGWrapper = styled.div`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  :active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  ${'' /* возможно не нужно */}
  :hover {
    stroke: #acacac;
    cursor: pointer;
  }
`

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
  margin-left: 28.5px;
`

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`