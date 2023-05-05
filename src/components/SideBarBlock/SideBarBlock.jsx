import { useEffect, useState } from 'react'
import playlist01 from '../assets/playlist01.png'
import playlist02 from '../assets/playlist02.png'
import playlist03 from '../assets/playlist03.png'

const SidebarListItem = ({ href, src, alt, isLoading }) => {
  return (
    <div
      className={
        isLoading === true
          ? 'sidebar__item sidebar__item_load'
          : 'sidebar__item'
      }
    >
      <a className="sidebar__link" href={href}>
        <img
          className={
            isLoading === true
              ? 'sidebar__img sidebar__img_load'
              : 'sidebar__img'
          }
          src={src}
          alt={alt}
        />
      </a>
    </div>
  )
}

function SideBarBlock() {
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
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarListItem
          href="#"
          src={playlist01}
          alt="day's playlist"
          isLoading={status}
        />
        <SidebarListItem
          href="#"
          src={playlist02}
          alt="100th hits"
          isLoading={status}
        />
        <SidebarListItem
          href="#"
          src={playlist03}
          alt="Indi charge"
          isLoading={status}
        />
      </div>
    </div>
  )
}

export default SideBarBlock