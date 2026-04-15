import { useEffect, useState, useRef } from 'react'
import styles from '../styles/musicplayer.module.css'

const PLAYLIST_ID = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID || '6d4dOq4u7EoLSciIjjcHPp'

const MusicPlayer = () => {
  const playerRef = useRef(null)
  const animationRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 100, y: 100 })

  useEffect(() => {
    setPosition({
      x: window.innerWidth * 0.75,
      y: window.innerHeight * 0.45,
    })
  }, [])

  // -------------------- DRAG ----------------------

  const handleMouseDown = (e) => {
    // Solo permitimos arrastrar desde el dragHandle
    if (e.target.closest(`.${styles.dragHandle}`)) {
      setDragging(true)
      const rect = playerRef.current.getBoundingClientRect()
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseUp = () => {
    if (!dragging) return
    setDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!dragging) return

    let newX = e.clientX - offset.x
    let newY = e.clientY - offset.y

    // Limites de la pantalla
    const padding = 20
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const boxWidth = playerRef.current?.offsetWidth || 380
    const boxHeight = playerRef.current?.offsetHeight || 135

    newX = Math.max(padding, Math.min(newX, windowWidth - boxWidth - padding))
    newY = Math.max(padding, Math.min(newY, windowHeight - boxHeight - padding))

    if (animationRef.current) cancelAnimationFrame(animationRef.current)

    animationRef.current = requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY })
    })
  }

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging, offset])

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div
      ref={playerRef}
      className={`${styles.musicPlayer} select-none`}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transition: dragging ? 'none' : 'box-shadow 0.3s ease, transform 0.1s ease-out, left 0.3s ease-out, top 0.3s ease-out',
      }}
    >
      {/* Barra de arrastre minimalista */}
      <div className={styles.dragHandle}>
        <div className={styles.dragBar}></div>
      </div>

      {/* Spotify Embed Compacto - Light Theme */}
      <div className={styles.embedContainer}>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>
    </div>
  )
}

export default MusicPlayer
