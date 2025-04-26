import Welcome from '../application/Welcome'
import SelectedWork from '../application/SelectedWork'

export default function HomeView() {
    return (
        <div className="container">
            <Welcome />
            <SelectedWork />
        </div>
    )
}
