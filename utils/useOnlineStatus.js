import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)

    const onlineCheck = () => setOnlineStatus(true)
    const offlineCheck = () => setOnlineStatus(false)

    useEffect(() => {
        window.addEventListener('online', onlineCheck)

        window.addEventListener('offline', offlineCheck)

        return () => {
            window.removeEventListener('online', onlineCheck)
            window.removeEventListener('offline', offlineCheck)
        }

    }, [])

    console.log("Online Status is :: " + onlineStatus)

    return onlineStatus
}

export default useOnlineStatus