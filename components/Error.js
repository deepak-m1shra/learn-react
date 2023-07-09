import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err = useRouteError()
    return (
        <div>
            <h1>Oops.. something went wrong!</h1>
            <h4>Looks like you're lost..</h4>
            <h5>Here are some details</h5>
            <code>{err.data}</code>
        </div>
    )
}