import { useRef } from 'react'

export default function useTilt({ maxAngle = 14, perspective = 700, scale = 1.03 } = {}) {
    const ref = useRef(null)

    function onMouseMove(e) {
        const el = ref.current
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transition = 'transform 0.08s linear, box-shadow 0.2s ease'
        el.style.transform = `perspective(${perspective}px) rotateX(${-y * maxAngle}deg) rotateY(${x * maxAngle}deg) scale(${scale})`
        el.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`)
        el.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`)
        el.classList.add('is-tilted')
    }

    function onMouseLeave() {
        const el = ref.current
        el.classList.remove('is-tilted')
        el.style.transition = 'transform 0.5s ease, box-shadow 0.2s ease'
        el.style.transform = ''
    }

    return { ref, onMouseMove, onMouseLeave }
}
