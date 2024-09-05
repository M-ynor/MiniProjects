import { Card, Sidebar } from './index'

function Content() {
    return (
        <div className='flex h-screen bg-DarkBg'>
            <Sidebar />
                <h1 className=''>Content</h1>
                <Card />
        </div>
    )
}

export default Content