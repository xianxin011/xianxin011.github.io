import { useHistory } from 'react-router-dom'

export function useRouter() {
    const history = useHistory()

    return {
        history,
        push: (path: string) => history.push(path),
        replace: (path: string) => history.replace(path)
    }
}