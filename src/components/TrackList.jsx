import  { useEffect, useState } from 'react'
import SkeletonImage from '../skeletons/skeleton-img'
import SkeletonTitle from '../skeletons/skeleton-title'

import * as S from './tracklist__style'

import like from '../assets/icon/like.svg'
import note from '../assets/icon/note.svg'

function TrackTime(props) {
  return (
    <S.TrackTime>
      <S.TrackTimeSvg alt="time">
        <image href={like} />
      </S.TrackTimeSvg>
      <S.TrackTimeText>{props.time}</S.TrackTimeText>
    </S.TrackTime>
  )
}

function PlayListItem(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {props.isLoading === true ? (
              <SkeletonImage />
            ) : (
              <S.TrackTitleImg>
                <S.TrackPlaySVGWrapper>
                  <svg>
                    <image href={note} />
                  </svg>
                </S.TrackPlaySVGWrapper>
              </S.TrackTitleImg>
            )}
          </S.TrackTitleImg>
          <div className="track__title-text">
            {props.isLoading === true ? (
              <SkeletonTitle />
            ) : (
              <S.TrackTitleLink href="http://">
                {props.track}{' '}
                <S.TrackTitleSpan>{props.trackRemix}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {props.isLoading === true ? (
            <SkeletonTitle />
          ) : (
            <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {props.isLoading === true ? (
            <SkeletonTitle />
          ) : (
            <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <TrackTime />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

function PlayListContent() {
  const [status, setStatus] = useState(true)
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false)
    }, 5000)
    return () => {
      clearTimeout(loadTimer)
    }
  })

  return (
    <S.ContentPlaylist>
      <PlayListItem
        isLoading={status}
        track="Guilt"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <PlayListItem
        isLoading={status}
        track="Elektro"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />
      <PlayListItem
        isLoading={status}
        track="I’m Fire"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <PlayListItem
        isLoading={status}
        track="Non Stop{' '}"
        trackRemix="(Remix)"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />
      <PlayListItem
        isLoading={status}
        track="Run Run{' '}"
        trackRemix="(feat. AR/CO)"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
      <PlayListItem
        isLoading={status}
        track="Eyes on Fire{' '}"
        trackRemix="(Zeds Dead Remix)"
        author="Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />
      <PlayListItem
        isLoading={status}
        track="Mucho Bien{' '}"
        trackRemix="(Hi Profile Remix)"
        author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bien"
        time="3:41"
      />
      <PlayListItem
        isLoading={status}
        track="Knives n Cherries{' '}"
        author="minthaze"
        album="Captivating"
        time="1:48"
      />
      <PlayListItem
        isLoading={status}
        track="How Deep Is Your Love{' '}"
        author="Calvin Harris, Disciples"
        album="How Deep Is Your Love"
        time="3:32"
      />
      <PlayListItem
        isLoading={status}
        track="Morena"
        author="Tom Boxer"
        album="Soundz Made in Romania"
        time="3:36"
      />
      <PlayListItem isLoading={status} track="" author="" album="" time="" />
    </S.ContentPlaylist>
  )
}

export default PlayListContent



