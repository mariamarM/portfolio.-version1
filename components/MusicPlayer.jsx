import { useEffect, useState, useRef } from 'react'
import styles from '../styles/musicplayer.module.css'

const CLIENT_ID = '0772e26b3b60455aa2cf60ba4d42ef7f'
const CLIENT_SECRET = 'c920e9a49822412a8b3d0b8383bc048a'
const PLAYLIST_ID = '7FBSUfzhs4QouNXecISMr2'

const MusicPlayer = () => {
  const [tracks, setTracks] = useState([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [error, setError] = useState(null)

  const playerRef = useRef(null)
  const animationRef = useRef(null) // ✅ CAMBIO: definido aquí correctamente
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 20, y: 20 })

  // -------------------- SPOTIFY ----------------------
  const getAccessToken = async () => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      })

      if (!response.ok) {
        throw new Error('Error al obtener el token: ' + response.status)
      }

      const data = await response.json()
      return data.access_token
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  const getPlaylistTracks = async (token) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Error al obtener la playlist: ' + response.status)
      }

      const data = await response.json()
      return data.items
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  useEffect(() => {
    const load = async () => {
      const token = await getAccessToken()
      if (!token) return
      const tracks = await getPlaylistTracks(token)
      if (tracks) setTracks(tracks)
    }

    load()
  }, [])

  useEffect(() => {
    if (tracks.length === 0) return
    const interval = setInterval(() => {
      setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [tracks])

  // -------------------- DRAG ----------------------

  const handleMouseDown = (e) => {
    setDragging(true)
    const rect = playerRef.current.getBoundingClientRect()
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })

    // ❌ ELIMINADO: useRef dentro de función
    // const animationRef = useRef(null)
  }

  const handleMouseUp = () => {
    if (!dragging) return
    setDragging(false)
    snapToClosestCorner()
  }

//   const snapToClosestCorner = () => {
//     const ref = playerRef.current
//     if (!ref) return

//     // ❌ ELIMINADO: useRef dentro de función
//     // const animationRef = useRef(null)

//     const windowWidth = window.innerWidth
//     const windowHeight = window.innerHeight
//     const boxWidth = ref.offsetWidth || 200
//     const boxHeight = ref.offsetHeight || 200

//     const corners = [
//       { x: 20, y: 20 }, // top-left
//       { x: windowWidth - boxWidth - 20, y: 20 }, // top-right
//       { x: 20, y: windowHeight - boxHeight - 20 }, // bottom-left
//       { x: windowWidth - boxWidth - 20, y: windowHeight - boxHeight - 20 }, // bottom-right
//     ]

//     const closestCorner = corners.reduce((closest, current) => {
//       const distCurrent = Math.hypot(current.x - position.x, current.y - position.y)
//       const distClosest = Math.hypot(closest.x - position.x, closest.y - position.y)
//       return distCurrent < distClosest ? current : closest
//     })

//     setPosition(closestCorner)
//   }

  const handleMouseMove = (e) => {
    if (!dragging) return

    const newX = e.clientX - offset.x
    const newY = e.clientY - offset.y

    if (animationRef.current) cancelAnimationFrame(animationRef.current)

    animationRef.current = requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY })
    })
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

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

  if (error) return <div style={{ color: 'red' }}>❌ Error: {error}</div>
  if (tracks.length === 0) return <div>🎵 Cargando música...</div>

  const track = tracks[currentTrackIndex].track

  return (
    <div
      ref={playerRef}
      className={`${styles.musicPlayer} select-none`} // ✅ CAMBIO: evita selección de texto
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: 'grab',
      }}
    >
      <img
        src={track.album.images[1]?.url}
        alt={`Portada de ${track.name}`}
        style={{
          maxWidth: '100px',
          borderRadius: '12px',
          marginBottom: '1rem',
        }}
      />
      <div className={styles.trackInfo}>
        <h3>{track.name}</h3>
        <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
        {track.preview_url ? (
          <audio key={track.id} src={track.preview_url} autoPlay controls />
        ) : (
          <p style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>Sin preview</p>
        )}
        <a
          href={`https://open.spotify.com/track/${track.id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.8rem', color: '#1DB954' }}
        >
          Escuchar en Spotify →
        </a>
      </div>
    </div>
  )
}

export default MusicPlayer
