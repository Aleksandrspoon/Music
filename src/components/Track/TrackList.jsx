import { useEffect, useState } from 'react';
import SkeletonImage from '../skeletons/skeleton-img';
import SkeletonTitle from '../skeletons/skeleton-title';
import playlist from './Track'

import * as S from './tracklist__style';

import like from '../assets/icon/like.svg';
import note from '../assets/icon/note.svg';

function TrackTime(props) {
  return (
    <S.TrackTime>
      <S.TrackTimeSvg alt="time">
        <img src={like} alt="like" />
      </S.TrackTimeSvg>
      <S.TrackTimeText>{props.time}</S.TrackTimeText>
    </S.TrackTime>
  );
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
              <img src={note} alt="note" />
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
        <TrackTime time={props.time} />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

function PlayListContent() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  })

  return (
    <S.ContentPlaylist>
      {playlist[0].tracks.map((track) => (
        <PlayListItem
          key={track.trackTitleText}
          track={track.trackTitleText}
          author={track.trackAuthorText}
          album={track.trackAlbumText}
          time={track.trackTime}
          isLoading={status}
        />
      ))}
    </S.ContentPlaylist>
  )
}

export default PlayListContent


